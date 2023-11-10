import { Request, Response } from "express";
import clients from "../../database/dados";
import { idsClientesUtilizados } from "../../database/dados";


export const updateTutor = (req:Request, res:Response) => {
    var userId = req.params.id;
    const userIdnum = parseInt(userId,10);

    let idTutorExist = false
    for(let x of idsClientesUtilizados){
        if(x === req.body.id){
            idTutorExist = true
        }
    }

    if(idTutorExist){
        return res.send("Id de tutor ja existe!")
    }else{
        clients.forEach((client, position) => {
            if(client.id === userIdnum){
                clients[position] = req.body;
                idsClientesUtilizados.splice(idsClientesUtilizados.indexOf(req.body.id),1)
            }
        })
        
        idsClientesUtilizados.push(req.body.id)
        return res.send("Trocou");
    }
    
    
}