"use strict";

const numero = 25;
const numeroGrande = 12345678901234567890n;
const texto = "Hola";
const booleano = true;
const valorNulo = null;
let indefinido;
const simbolo = Symbol("id");
const objeto = { nombre: "Fernando" };

const datos = [
    ["number", numero],
    ["bigint", numeroGrande],
    ["string", texto],
    ["boolean", booleano],
    ["null", valorNulo],
    ["undefined", indefinido],
    ["symbol", simbolo],
    ["object", objeto]
];

document.write("<h1>Tipos de datos</h1><ul>");

for (const [nombre, valor] of datos) {
    document.write(
        "<li>" + nombre + ": " +
        String(valor) + " | typeof: " +
        typeof valor + "</li>"
    );
}

document.write("</ul>");

// typeof null devuelve "object" por una particularidad
// histórica de JavaScript, no porque null sea un objeto.