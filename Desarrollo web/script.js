document.addEventListener('DOMContentLoaded',function(){
const button = document.getElementById('cambioTexto');
button.addEventListener('click', function(){
    const introSection = document.getElementById('intro');
introSection.innerHTML='<p> El texto ha cambiado¡¡</p>';
});

});