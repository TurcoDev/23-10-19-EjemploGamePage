

function animacion() {
  // alert("Aaaahhh, queres ver los juegos??")
  const juegos = document.getElementById("contenedor_juegos")
  juegos.style.animationName = 'movimiento2'
  juegos.style.animationDuration = '4s'
}


// funcionalidad boton ver mas
function verMas() {
  let elemento = document.getElementById("texto_juego1");
  if (elemento.style.height != "fit-content") {
    elemento.style.height = "fit-content";
  } else{
    elemento.style.height = "50px";
  }
}