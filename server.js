const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');
const app = express();
const port = process.env.PORT || 3000;

//  __dirname -> Es siempre el directorio en el que reside el script que se esta
//  ejecutando actualmente

// Middleware
app.use(express.static(__dirname + '/public'));

// Bloque de codigo HTML que se puede reutilizar
hbs.registerPartials(__dirname + '/views/partials');

// Express HBS engine
// Para tener vistas dinamicas
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'daniel echeverry'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});


app.get('/data', (req, res) => {
    res.status(200).send({
        nombre: 'Daniel Echeverry',
        edad: 22,
        url: req.url
    });
});



app.listen(port, () => {
    console.log(`Escuchando peticiónes en el puerto ${ port }`);
});