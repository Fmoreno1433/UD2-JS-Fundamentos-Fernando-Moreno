
"use strict";

const entrada = prompt("Introduce tu nota (0-10):");

if (entrada === null || entrada.trim() === "") {
    alert("No has introducido ninguna nota.");
} else {
    const nota = Number(entrada);

    if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
        alert("Error: introduce una nota entre 0 y 10.");
    } else if (nota < 5) {
        alert("Suspenso");
    } else if (nota < 7) {
        alert("Aprobado");
    } else if (nota < 9) {
        alert("Notable");
    } else {
        alert("Sobresaliente");
    }
}

// Versión original:
// if (nota >= 5) {
//     resultado = "Aprobado";
// } else {
//     resultado = "Suspenso";
// }

// La misma comprobación con operador ternario:
const ejemploNota = 6;
const resultado = ejemploNota >= 5 ? "Aprobado" : "Suspenso";

console.log(resultado);
