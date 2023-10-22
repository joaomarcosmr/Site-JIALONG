

document.addEventListener('click', (e) => {
    let navLink = e.target
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.hasAttribute('aria-current')) link.removeAttribute('aria-current')
    })
    if(navLink) navLink.setAttribute("aria-current", "page")
})

