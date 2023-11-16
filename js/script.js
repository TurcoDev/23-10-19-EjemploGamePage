

function animacion() {
  // alert("Aaaahhh, queres ver los juegos??")
  const juegos = document.getElementById("contenedor_juegos")
  juegos.style.animationName = 'movimiento2'
  juegos.style.animationDuration = '4s'
}


// funcionalidad boton ver mas
function verMas(elemento, event) {
  // console.log(event);
  // console.log(event.target);
  console.log(elemento.parentNode);
  // console.log(elemento.parentElement);
  console.log(elemento);

  elemento.parentNode.style.backgroundColor = "rgba(255, 157, 157, 0.5)";
  // let elem = document.getElementById("texto_juego1");
  // console.log(elem);
  if (elemento.style.height != "fit-content") {
    elemento.style.height = "fit-content";
  } else{
    elemento.style.height = "50px";
  }
}


function comentario() {
  alert('Gracias por tu comentario 🎉')
}
