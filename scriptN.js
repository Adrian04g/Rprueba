document.getElementById('nav-toggle').addEventListener('click', function(){
    document.querySelector('nav').classList.toggle('nav-open');
})

function mostrarmensaje(seccion) {
    alert("Esta es la seccion" + seccion)
}