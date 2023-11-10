import { Request, Response } from "express";
import clients from "../../database/dados";
import { idsClientesUtilizados } from "../../database/dados";

export const addTutor = (req:Request, res:Response) => {
    const novoTutor = req.body;

    let idTutorExist = false
    for(let x of idsClientesUtilizados){
        if(x === novoTutor.id){
            idTutorExist = true
        }
    }


    if(idTutorExist){
        return res.send("Id ja existe")
    }else{
        clients.push(novoTutor)
        res.send("Tutor adicionado");
        idsClientesUtilizados.push(novoTutor.id);
    }
};