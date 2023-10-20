class FormSubmit{
    constructor(settings){
        this.settings = settings
        this.valid = true
        this.campoVazio = false
        this.form = document.querySelector(settings.form)
        this.formButton = document.querySelector(settings.button)
        if (this.form){
            this.url = this.form.getAttribute("action")
        }
        this.sendForm = this.sendForm.bind(this)
    }

    displaySuccess(){
        this.form.innerHTML = this.settings.success
    }

    displayError(event){
        const div = document.createElement('div')
        const divText = document.getElementById('divText')
        div.id = 'tagError'
        event.target.disabled = false
        event.target.innerText = "Enviar"
        div.innerHTML = this.settings.error
        divText.appendChild(div)
    }

    getFormObject(){
        const formObject = {}
        const fields = this.form.querySelectorAll("[name]")
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value
        })
        return formObject
    }

    onSubmission(event){
        event.preventDefault()
        event.target.disabled = true
        event.target.innerText = "Enviando sua mensagem..."
    }

    async sendForm(event){
        try{
            const tagError = document.getElementById('tagError')
            if(tagError){
                tagError.remove()
            }
            this.onSubmission(event)
            this.checkFields()
            if(this.valid == true) {
                await fetch(this.url, {
                    method: 'POST',
                    headers:{
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(this.getFormObject()),
                })
                this.displaySuccess()
            } else {
                if(this.campoVazio) this.settings.error = "<h3 class='msg text-danger my-4'>Preencha todos os campos</h3>"
                this.displayError(event)
            }
        }catch(e){
            console.log(e)
            this.displayError()
        }
    }

    checkFields(){
        const fields = this.form.querySelectorAll("[name]")
        const email = document.getElementById('email-input')
        const textArea = document.getElementById('textArea')
        const tel = document.getElementById('tel-input')
        
        let num = tel.value.split('').every(function(char){
            return !isNaN(char)
        })

        this.valid = true
        this.campoVazio = false
        if(!num){
            this.valid = false
            this.settings.error = "<h3 class='msg text-danger my-4'>Apenas números no campo telefone</h3>"
        }
        if(!email.value.includes("@") || !email.value.includes(".")){
            this.valid = false
            this.settings.error = "<h3 class='msg text-danger my-4'>E-mail inválido</h3>"
        }
        if(!num && (!email.value.includes("@") || !email.value.includes("."))){
            this.valid = false
            this.settings.error = "<h3 class='msg text-danger my-4'>E-mail inválido<br>Apenas números no campo telefone</h3>"
        }

        fields.forEach((field) => {
            if(field.value == '' || textArea.value == ''){
                this.valid = false
                this.campoVazio = true
                return
            }
        })
    }

    init(){
        if(this.form){
        this.formButton.addEventListener("click", this.sendForm)
        return this
        }
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h3 class='msg'>Mensagem enviada!</h3>",
    error: "<h3 class='msg'>Não foi possível enviar a sua mensagem</h3>"
})

formSubmit.init() 