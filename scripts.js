const btnMobile = document.getElementById('btn-mobile')

function togglemenu(event) {
    if (event.type === 'touchstart')event.preventDefault()
    // seleciona a tag #nav
    const nav = document.getElementById('nav')
    // adiciona uma class="active" dentro do nav ai vai ficar nav class="active"
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
    event.currentTarget.setAttribute('aria-label', 'Abir Menu')
    }
}

btnMobile.addEventListener("click", togglemenu)
btnMobile.addEventListener("touchstart", togglemenu)/*para tira o delei na hora do click */

