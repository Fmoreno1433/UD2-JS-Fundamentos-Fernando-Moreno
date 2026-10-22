
"use strict";

// Compara valores y muestra el resultado de cada expresión.

console.log('2 > 1:', 2 > 1); // true: 2 es mayor que 1.
console.log('"2" > 1:', "2" > 1); // true: el texto se convierte en número.
console.log('"01" == 1:', "01" == 1); // true: == convierte tipos.
console.log('0 == false:', 0 == false); // true: false equivale a 0.
console.log('"" == false:', "" == false); // true: ambos se convierten a 0.
console.log('0 === false:', 0 === false); // false: los tipos son distintos.
console.log('null == undefined:', null == undefined); // true: caso especial de ==.
console.log('null === undefined:', null === undefined); // false: tipos diferentes.
console.log('null > 0:', null > 0); // false: null se convierte en 0.
console.log('null >= 0:', null >= 0); // true: null se convierte en 0.
console.log('undefined == 0:', undefined == 0); // false: no equivale a 0.
console.log('"Glow" > "Glee":', "Glow" > "Glee"); // true: se comparan caracteres.
console.log('5 === "5":', 5 === "5"); // false: número frente a texto.
console.log('10 != "10":', 10 != "10"); // false: == permite conversión de tipos.
