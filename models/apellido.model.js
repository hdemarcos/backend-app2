//Definiendo un objeto de tipo mongoose
const mongoose = require('mongoose');
//Definiendo la estructra del objeto Apellido
const BecaSchema = mongoose.Schema(
    {
        paterno:{
            type: String,
            required: true 
        },
        materno:{
            type: String,
            required: true 
        },
    }
)