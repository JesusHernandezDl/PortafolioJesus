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
