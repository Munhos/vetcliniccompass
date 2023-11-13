import mongoose from "mongoose";
const {Schema} = mongoose;

const petsSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    idTutor:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    species:{
        type: String,
        required: true
    },
    carry:{
        type: String,
        required: true
    },
    weight:{
        type: Number,
        required: true
    },
    date_of_birth:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
});

const Pets = mongoose.model("Pets", petsSchema);

export default Pets;