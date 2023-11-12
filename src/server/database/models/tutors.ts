import mongoose from "mongoose";
const {Schema} = mongoose;

const tutorSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    date_of_birth:{
        type: String,
        required: true
    },
    zipCode:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
});

const Tutor = mongoose.model("Tutor", tutorSchema);

export default Tutor;