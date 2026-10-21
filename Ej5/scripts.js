
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
    alert("Debes introducir dos números válidos.");
} else {
    const num1 = Number(entrada1);
    const num2 = Number(entrada2);

    alert("Suma numérica: " + (num1 + num2));

    // Sin convertir, los textos se concatenan.
    alert("Concatenación: " + (entrada1 + entrada2));
}

const valores = [
    "123", " 45 ", "abc", "", "0",
    0, null, undefined, true
];

let html = `
    <h1>Conversión de tipos</h1>
    <table border="1">
        <tr>
            <th>Valor original</th>
            <th>Number()</th>
            <th>String()</th>
            <th>Boolean()</th>
        </tr>
`;

for (const valor of valores) {
    const mostrar = (dato) => {
        if (dato === undefined) return "undefined";
        if (dato === null) return "null";
        return String(dato);
    };

    html += `
        <tr>
            <td>${mostrar(valor)}</td>
            <td>${String(Number(valor))}</td>
            <td>${String(valor)}</td>
            <td>${String(Boolean(valor))}</td>
        </tr>
    `;
}

html += "</table>";
document.write(html);
