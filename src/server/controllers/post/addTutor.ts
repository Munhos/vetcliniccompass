import { Request, Response } from "express";
import clients from "../../database/dados";

export const addTutor = (req:Request, res:Response) => {
    const novoTutor = req.body;
    let idExiste = false
    clients.forEach((client) => {
        if(client.id == novoTutor.id){
            idExiste = true
        }
    })
    if(idExiste){
        return res.send("Id ja existe")
    }else{
        clients.push(novoTutor)
        res.send("Tutor adicionado");
    }
    
    
};