
"use strict";

const nombre = prompt("Introduce tu nombre:");
const apodo = prompt("Introduce tu apodo:");
const entradaEdad = prompt("Introduce tu edad:");

const edad = entradaEdad === null ? NaN : Number(entradaEdad);

// || devuelve el primer valor verdadero o el último valor.
const nombreMostrar = (nombre || "").trim() ||
    (apodo || "").trim() || "Anónimo";

alert("Nombre de usuario: " + nombreMostrar);

// && permite mostrar el mensaje solo si se cumplen ambas condiciones.
const tieneNombre =
    (nombre || "").trim() !== "" ||
    (apodo || "").trim() !== "";

if (Number.isFinite(edad) && edad >= 18 && tieneNombre) {
    alert("Acceso permitido");
} else {
    alert("Acceso denegado");
}

// Diferencia entre || y ??:
const altura = 0;

console.log(altura || 170); // 170: 0 es falsy.
console.log(altura ?? 170); // 0: solo sustituye null o undefined.

// !! convierte un valor a booleano.
const tieneApodo = !!((apodo || "").trim());

console.log("¿Tiene apodo?: " + tieneApodo);
