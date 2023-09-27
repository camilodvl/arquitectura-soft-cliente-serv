import mongoose from "mongoose";

const personaSchema = mongoose.Schema({
    name: { type: String, 
    },
    apellido : {
        type: String
    },
    edad: {
        type: Number
    }
});

const Persona = mongoose.model('Persona', personaSchema)

export default Persona;