//invpcación de la librería express
const express = require('express');
//invpcación de la librería mongoose para conexión a base de datos de mongodb
const mongoose = require('mongoose');
//Importar las rutas de la colección Beca
const becaRoute = require('./routes/beca.route');

//Incialización de la aplicación basada en express
const app = express();
// Incorporando el parser de JSON
app.use( express.json() );


//Tareas CRUD
// C - Create (Crear,agregar) ---> post
// R - Read (Leer o recuperar) ---> get
// U - Update (Actualizar) ---> put
// D - Delete (Borrar o eliminar) ---> delete

// Endpoint por defecto
app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor de APIs');
})

// Endpoints de la colección Becas
app.use('/api/becas', becaRoute);

// Definiendo la conexión a base de datos a través de mongoose
// La conexión a base de datos es de tipo promesa
mongoose.connect('mongodb+srv://utp0159311:jok8ZRasDYoO3ck1@cluster0.8sqlw.mongodb.net/BD_SUBES')
.then(() => {
    console.log('Conectando a la base de datos de manera exitosa');
    app.listen(3000, () => {
        console.log('Servidor respondiendo en el puerto 3000');
    });
})
.catch( () => console.log('Ocurrió un prblema al conectar la base de datos'))

