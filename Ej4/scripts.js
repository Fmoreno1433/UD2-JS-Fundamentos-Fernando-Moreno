
"use strict";

const nombre = prompt("¿Cómo te llamas?");

if (nombre === null) {
    alert("Has cancelado el formulario.");
} else {
    const ciudad = prompt("¿En qué ciudad vives?");

    if (ciudad === null) {
        alert("Has cancelado el formulario.");
    } else {
        const nacimiento = prompt("¿En qué año naciste?");

        if (nacimiento === null) {
            alert("Has cancelado el formulario.");
        } else {
            const anioNacimiento = Number(nacimiento);
            const anioActual = new Date().getFullYear();

            if (
                nacimiento.trim() === "" ||
                !Number.isInteger(anioNacimiento) ||
                anioNacimiento < 1 ||
                anioNacimiento > anioActual
            ) {
                alert("El año de nacimiento no es válido.");
            } else {
                const edad = anioActual - anioNacimiento;

                alert(`¡Bienvenido/a, ${nombre}!
Vives en ${ciudad} y tienes aproximadamente ${edad} años.`);
            }
        }
    }
}
