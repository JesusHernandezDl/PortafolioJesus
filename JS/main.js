// Transición fluida a cada sección
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const enlace = document.getElementById('correo');
const boton = document.getElementById('btnCopiar');

boton.addEventListener('click', async (e) => {
    const email = enlace.dataset.email;

    try {
        await navigator.clipboard.writeText(email);
        alert('¡Correo copiado!');
    } catch (err) {
        console.error('Error al copiar', err);
    }
});

const btnMenu = document.getElementById('btnMenu');
const menuMovil = document.getElementById('menuMovil');
const iconoMenu = document.getElementById('iconoMenu');
const linksMovil = document.querySelectorAll('.link-movil');

// Alternar menú al dar clic en el botón
btnMenu.addEventListener('click', () => {
    menuMovil.classList.toggle('hidden');
    menuMovil.classList.toggle('flex');

    // Cambiar icono de hamburguesa a 'X' y viceversa
    if (menuMovil.classList.contains('hidden')) {
        iconoMenu.textContent = 'menu';
    } else {
        iconoMenu.textContent = 'close';
    }
});

// Cierra el menú automáticamente cuando el usuario hace clic en una sección
linksMovil.forEach(link => {
    link.addEventListener('click', () => {
        menuMovil.classList.add('hidden');
        menuMovil.classList.remove('flex');
        iconoMenu.textContent = 'menu';
    });
});