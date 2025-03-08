const express = require('express');
const router = express.Router();
const {
    getBecas,
    getBecaById,
    setBeca,
    updateBeca,
    delateBecaById
} = require('../controllers/beca.controller'); // Ajusta la ruta según tu estructura

//Vamos a comenzar a definir las rutas

// Endpoint para recuperar toda la colección de Becas
router.get('/allBecas', getBecas)

// Endpoint para recuperar un elemento de la colección Becas
router.get('/becasById/:id', getBecaById);

// Endpoint para agregar un elemento de la colección Becas
router.post('/add', setBeca);

// Endpoint para la actualización de un elemento de la colección Becas
router.put('/modify/:id', updateBeca);

// Endpoint para la eliminación de un elemento de la colección Becas
router.delete('/less/:id', delateBecaById);


module.exports = router;

