document.addEventListener('DOMContentLoaded', function () {
    eventListeners();
    darkMode()
})

function darkMode() {
    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
    if (prefiereDarkMode.matches) {
        document.body.classList.add('dark-mode')
    } else {
        document.body.classList.remove('dark-mode')
    }

    //Cambia a dark mode o light mode dependiendo del modo automatico del PC
    prefiereDarkMode.addEventListener('change', function () {
        if (prefiereDarkMode.matches) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    })

    const botonDarkMode = document.querySelector('.dark-mode-boton')
    botonDarkMode.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode')
    })
}

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.addEventListener('click', navegacionResponsive)

    //Muestra campos condicionales
    const metodoContacto = document.querySelectorAll('input[name="contacto[contacto]"]');
    metodoContacto.forEach(input => input.addEventListener('click', mostrarMetodosContacto));
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion')

    // if (navegacion.classList.contains('mostrar')) {
    //     navegacion.classList.remove('mostrar')
    // } else {
    //     navegacion.classList.add('mostrar')
    // }

    //Toggle hace lo mismo que el if else de arriba
    navegacion.classList.toggle('mostrar')
}

function mostrarMetodosContacto(e) {
    const contactoDiv = document.querySelector('#contacto');
    if (e.target.value === 'telefono') {
        contactoDiv.innerHTML = `
            <label for="telefono">Teléfono</label>
            <input type="tel" placeholder="Tu Teléfono" id="telefono" name="contacto[telefono]">

            <p>Elija fecha y hora para ser contactado por llamada</p>
            <label for="fecha">Fecha</label>
            <input type="date" id="fecha" name="contacto[fecha]">

            <label for="hora">Hora</label>
            <input type="time" id="hora" min="09:00" max="18:00" name="contacto[hora]">
        `;
    } else {
        contactoDiv.innerHTML = `
            <label for="email">Email</label>
            <input type="email" placeholder="Tu Email" id="email" name="contacto[email]" required>
        `;
    }
}