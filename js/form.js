class FormSubmit{
    constructor(settings){
        this.settings = settings
        this.form = document.querySelector(settings.form)
        this.formButton = document.querySelector(settings.button)
        if (this.form){
            this.url = this.form.getAttribute("action")
        }
        this.sendForm = this.sendForm.bind(this)
        this.error = []
    }

    displaySuccess(){
        this.form.innerHTML = this.settings.success
    }

    displayError(){
        this.form.innerHTML = this.settings.error
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
            this.onSubmission(event)
            await fetch(this.url, {
                method: 'POST',
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(this.getFormObject()),
            })
            this.displaySuccess()
        } catch(e){
            console.log(e)
            this.displayError()
        }
    }

    /*checkInput(){
        const fields = this.form.querySelectorAll("[name]")
        const fieldText = this.form.querySelector("#textArea")
        const input = []
        fields.forEach((field) => {
            input.push(field.value)
        })
        if(input.length < 3 || fieldText.value == ""){
            this.error.push("campoinvalido")
            return
        }
    }*/

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
    success: "<h3 class='success'>Mensagem enviada!</h3>",
    error: "<h3 class='error'>Não foi possível enviar a sua mensagem</h3>"
})

formSubmit.init()