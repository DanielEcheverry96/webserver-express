const hbs = require('hbs');

// Helper funcion que se dispara cuando el template lo requiere
hbs.registerHelper('getYear', () => new Date().getFullYear());

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });


    return palabras.join(' ');
});