"use strict";

let userName = "Fernando";
let age = 20;
let city = "Madrid";

const COLOR_FAVORITO = "#0000FF";
const loadTime = Date.now();

alert("Nombre: " + userName);
alert("Edad: " + age);
alert("Ciudad: " + city);
alert("Color favorito: " + COLOR_FAVORITO);
alert("Tiempo de carga: " + loadTime);

// Una constante no se puede reasignar.
// COLOR_FAVORITO = "#FF0000";
// Error: Assignment to constant variable.
