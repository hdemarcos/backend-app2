const Beca = require('../models/beca.model');

// Función para recuperar la colección de Becas
const getBecas = async(req, res) => {
    try {
        const Becas = await Beca.find({});
        res.status(200).json(Becas);
    } catch (error){
        res.status(500).json({
           status: "error: " + error.message 
        });
    }
}


//Función para recuperar un elemento de la colección con base en el _id

const getBecaById = async(req, res) => {
    try {
        // id proviene de una variable en la URL
        const { id } = req.params; // Obtener el _id desde los parámetros de la URL
        const Becas = await Beca.find({'_id': id});
        res.status(200).json(Becas);
    } catch (error){
        res.status(500).json({
           status: "error: " + error.message 
        });
    }
}

// Función que agrega un elemento a la colección
const setBeca = async(req, res) => {
    try{
        const simpleBeca = await Beca.create( req.body );
        res.status(200).json(simpleBeca);

    } catch (error) {
        res.status(500).json({
            status: "error: " + error.message 
        });
    }
}


//Función para actualizar un elemento de la colección, usando su Id
const updateBeca = async(req, res) => {
    try{
        const { id } = req.params;
        const UpdatedBeca = await Beca.findByIdAndUpdate(id, req.body);
        if (!UpdatedBeca) {
            return res.status(400).json({
                status: "error",
                message: "Document no found"
            });
        }
        const Becas = await Beca.find({'_id': id});
            res.status(200).json(Becas);
    
    } catch (error) {
        res.status(500).json({
            status: "error: " + error.message 
        });
    }
} 


// Función para eliminar un elemento de la colección con base en el _id
const delateBecaById = async(req, res) => {
    try{
        //id proviene de una variable en la URL
        const { id } = req.params;
        const Becas = await Beca.find({'_id': id});
        if(!Becas){
            res.status(400).json({
                message: "Document not found"
            });
        }

        const DeletedBeca = await Beca.deleteOne({'_id': id});
        res.status(200).json({
            message: "Document deleted"
            });
            
    } catch (error) {
        res.status(500).json({
            status: "error: " + error.message 
        });
    }
} 




module.exports = {
    getBecas,
    getBecaById,
    setBeca,
    updateBeca,
    delateBecaById

}
