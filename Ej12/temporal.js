
"use strict";

if (typeof Temporal === "undefined") {
    document.write(
        "<p>Temporal no está disponible en este navegador. " +
        "Necesitas un navegador compatible o un polyfill.</p>"
    );
} else {
    const hoy = Temporal.Now.plainDateISO();
    const diaActual = hoy.day;

    if (diaActual > 30) {
        document.write("<p>No quedan días disponibles del 1 al 30.</p>");
    } else {
        const diaEvento =
            Math.floor(Math.random() * (31 - diaActual)) + diaActual;

        const evento = Temporal.PlainDate.from({
            year: hoy.year,
            month: hoy.month,
            day: diaEvento
        });

        const diasFaltan = hoy.until(evento, {
            largestUnit: "day"
        }).days;

        const meses = [
            "enero", "febrero", "marzo", "abril",
            "mayo", "junio", "julio", "agosto",
            "septiembre", "octubre", "noviembre", "diciembre"
        ];

        const formato = fecha =>
            `${fecha.day} de ${meses[fecha.month - 1]} de ${fecha.year}`;

        document.write(`<p>La fecha actual es ${formato(hoy)}</p>`);
        document.write(`<p>La fecha del evento: ${formato(evento)}</p>`);
        document.write(
            `<p>Días que faltan para el evento: ${diasFaltan} días</p>`
        );
    }
}
