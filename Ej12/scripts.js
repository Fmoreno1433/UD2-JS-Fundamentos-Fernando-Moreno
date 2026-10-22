
"use strict";

const playlist = [
    ["Bohemian Rhapsody", "Queen", 354, "Rock"],
    ["Hotel California", "Eagles", 391, "Rock"],
    ["Imagine", "John Lennon", 183, "Pop"]
];

function mostrarPlaylist(titulo, canciones) {
    document.body.innerHTML +=
        `<h2>${titulo}</h2><pre>${JSON.stringify(canciones, null, 2)}</pre>`;
}

// PARTE 1: push y pop

// 1. Añadir dos canciones.
playlist.push(["Billie Jean", "Michael Jackson", 294, "Pop"]);
playlist.push(["Smells Like Teen Spirit", "Nirvana", 301, "Grunge"]);

// 2. Eliminar la última canción.
const cancionEliminada = playlist.pop();

// 3. Añadir el año a la primera canción.
playlist[0].push(1975);

// 4. Mostrar resultados.
document.body.innerHTML +=
    `<p>Canción eliminada: ${cancionEliminada[0]}</p>`;

mostrarPlaylist("Parte 1: playlist resultante", playlist);

// PARTE 2: splice

// 5. Insertar una canción en la posición 1.
playlist.splice(1, 0, ["Thriller", "Michael Jackson", 357, "Pop"]);

// 6. Eliminar la canción situada en la posición 2.
const cancionEliminadaSplice = playlist.splice(2, 1)[0];

document.body.innerHTML +=
    `<p>Canción eliminada: ${JSON.stringify(cancionEliminadaSplice)}</p>`;

// 7. Sustituir la canción de la posición 0.
playlist.splice(0, 1, ["One", "Metallica", 447, "Metal"]);

// 8. Mostrar resultados.
mostrarPlaylist("Parte 2: playlist resultante", playlist);

// PARTE 3: spread y copias

// 9. Copia superficial: se copia el array exterior,
// pero las canciones interiores siguen siendo compartidas.
const copiaSuperficial = [...playlist];
copiaSuperficial[0][0] = "Título cambiado";

mostrarPlaylist("Original tras modificar la copia superficial", playlist);

// El título original también cambia porque ambos arrays
// comparten la misma fila interior.

// 10. Copia independiente de cada fila.
const copiaIndependiente = playlist.map(cancion => [...cancion]);

copiaIndependiente[0][0] = "Título solo en la copia";

mostrarPlaylist("Copia independiente modificada", copiaIndependiente);
mostrarPlaylist("Playlist original sin el último cambio", playlist);
