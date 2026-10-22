
"use strict";

let opcion;

while (opcion !== "0") {
    opcion = prompt(
        "MENÚ\n" +
        "1. Tabla de multiplicar\n" +
        "2. Sumar números\n" +
        "3. Números impares del 1 al 20\n" +
        "4. Cuenta atrás\n" +
        "0. Salir"
    );

    if (opcion === null) {
        break;
    }

    switch (opcion) {
        case "1": {
            const entrada = prompt("¿De qué número?");
            const numero = Number(entrada);

            if (
                entrada === null ||
                entrada.trim() === "" ||
                !Number.isFinite(numero)
            ) {
                alert("Número no válido.");
                break;
            }

            let resultado = "";

            // for repite la tabla diez veces.
            for (let i = 1; i <= 10; i++) {
                resultado += `${numero} x ${i} = ${numero * i}\n`;
            }

            alert(resultado);
            break;
        }

        case "2": {
            let suma = 0;

            // while(true) se repite hasta ejecutar break.
            while (true) {
                const entrada = prompt(
                    "Introduce un número. Vacío o Cancelar para terminar."
                );

                if (entrada === null || entrada.trim() === "") {
                    break;
                }

                const numero = Number(entrada);

                if (!Number.isFinite(numero)) {
                    alert("Introduce un número válido.");
                    continue;
                }

                suma += numero;
            }

            alert("Suma total: " + suma);
            break;
        }

        case "3": {
            let resultado = "";

            // continue salta los números pares.
            for (let i = 1; i <= 20; i++) {
                if (i % 2 === 0) {
                    continue;
                }

                resultado += i + " ";
            }

            alert(resultado);
            break;
        }

        case "4": {
            const entrada = prompt("¿Desde qué número contamos?");
            const numero = Number(entrada);

            if (
                entrada === null ||
                entrada.trim() === "" ||
                !Number.isInteger(numero) ||
                numero < 0
            ) {
                alert("Introduce un entero no negativo.");
                break;
            }

            let contador = numero;

            // do...while se ejecuta al menos una vez.
            let resultado = "";

            do {
                resultado += contador + " ";
                contador--;
            } while (contador >= 0);

            alert(resultado);
            break;
        }

        case "0":
            alert("Hasta pronto.");
            break;

        default:
            alert("Opción desconocida.");
    }
}
