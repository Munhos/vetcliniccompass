import express from "express";
import 'dotenv/config';

import { router } from "./routes";

import mongoose from "mongoose";

mongoose.connect("mongodb+srv://JulioCesarCorrea:o7MONItUL68KXzDe@challengecompassvetclin.pdnjown.mongodb.net/?retryWrites=true&w=majority").then(
    () => {
        console.log("Banco de dados conectado");
    }
).catch(()=>{
    console.log("Banco de dados não conectou");
    
});

const server = express();

server.use(express.json());
server.use(router);


export { server };