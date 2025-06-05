document.addEventListener('DOMContentLoaded',function(){
const button = document.getElementById('cambioTexto');
button.addEventListener('click', function(){
    const introSection = document.getElementById('intro');
introSection.innerHTML='<p> El texto ha cambiado¡¡</p>';
});

});

function bienvenida(){
    alert("BIenvenido a mi agina web")
}

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
 const name = document.getElementById('name').value;
 const email = document.getElementById('email').value;
 if (name === '' || email === '') {
 alert('Por favor, completa todos los campos.');
 event.preventDefault();
 } else {
 alert('¡Formulario enviado correctamente!');
 }
});