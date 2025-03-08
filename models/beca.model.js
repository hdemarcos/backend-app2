//Definiendo un objeto de tipo mongoose
const mongoose = require('mongoose');
//Definiendo la estructra del documento Beca
const BecaSchema = mongoose.Schema(
    {
        matricula:{
            type: String,
            required: true 
        },
        nombres:{
            type: String,
            required: true 
        },
        status:{
            type: String,
            required: true 
        },
        division:{
            type: String,
            required: true 
        },
        programa:{
            type: String,
            required: true 
        },
        cuatrimestre:{
            type: String,
            required: true 
        },
        grupo:{
            type: String,
            required: true 
        },
        turno:{
            type: String,
            required: true 
        },
        sexo:{
            type: String,
            required: true 
        },
        curp:{
            type: String,
            required: true 
        },
        direccion:{
            type: String,
            required: true 
        },
        CP:{
            type: Number,
            required: true 
        },
        Colonia:{
            type: String,
            required: true 
        },

        municipio:{
            type: String,
            required: true 
        },

        estado:{
            type: String,
            required: true 
        },

        telefono:{
            type: String,
            required: true 
        },

        email:{
            type: String,
            required: true 
        },

        tipo_beca:{
            type: String,
            required: true 
        },

        prom_general:{
            type: Number,
            required: true 
        },
        
        uno:{
            type: Number,
            required: true 
        },
        dos:{
            type: Number,
            required: true 
        },
        tres:{
            type: Number,
            required: true 
        },
        cuatro:{
            type: Number,
            required: true 
        },
        cinco:{
            type: Number,
            required: true 
        },
        seis:{
            type: Number,
            required: true 
        },

        siete:{
            type: Number,
            required: true 
        },

        ocho:{
            type: Number,
            required: true 
        },

        nueve:{
            type: Number,
            required: true 
        },

        diez:{
            type: Number,
            required: true 
        },

    }
)

const Beca = mongoose.model('Beca', BecaSchema);
module.exports = Beca;