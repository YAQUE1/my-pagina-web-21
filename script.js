//alert("Hola este e mi Javascript");


let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

let nombre = "Yaqueline";
nombre= "Yaqui";

var nombre2 = "Yaqueline";

const nombre1 = "Yaqueline";
//nombre2 = maria

console.log(nombre);
console.log(nombre1);
console.log(nombre2);

let contenidoTitulo = "nombre"

let titulo = document .querySelector(".logo .fuente-")
titulo.innerHTML = contenidoTitulo; 

//CONDICIONALES
let textoTitulo = titulo.innerHTML;
console.log(textoTitulo);

if(textoTitulo == "nombre") { 
    titulo.innerHTML = "MI WEB";
} else {
console.log ("no se cumple")
}

// FUNCIONES

let nombre3 = "mart"
let ciudad = "Medellín"
let gusto = "la bandeja paisa"





// FORMULARIO;

const form = document.getElementById("form");
const nombres = document.getElementById("nombres");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});


