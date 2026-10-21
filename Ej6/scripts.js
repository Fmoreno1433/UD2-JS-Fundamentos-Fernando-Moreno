
"use strict";

const entrada1 = prompt("Introduce el primer número:");
const entrada2 = prompt("Introduce el segundo número:");

if (
    entrada1 === null ||
    entrada2 === null ||
    entrada1.trim() === "" ||
    entrada2.trim() === "" ||
    !Number.isFinite(Number(entrada1)) ||
    !Number.isFinite(Number(entrada2))
) {
    alert("Entrada no válida.");
} else {
    const num1 = Number(entrada1);
    const num2 = Number(entrada2);

    alert("Suma: " + (num1 + num2));
    alert("Resta: " + (num1 - num2));
    alert("Multiplicación: " + (num1 * num2));
    alert("División: " +
        (num2 !== 0 ? num1 / num2 : "No se puede dividir entre cero"));
    alert("Resto: " + (num1 % num2));
    alert("Potencia: " + (num1 ** num2));
}

let counter = 5;

alert("Valor inicial: " + counter);

// El sufijo muestra el valor anterior al incremento.
alert("counter++: " + counter++);
alert("Después del sufijo: " + counter);

// El prefijo incrementa primero y muestra el nuevo valor.
alert("++counter: " + ++counter);

alert("counter--: " + counter--);
alert("Después del sufijo decremento: " + counter);
alert("--counter: " + --counter);

let total = 10;
total += 5;
total *= 2;

alert("Resultado de las asignaciones compuestas: " + total);
