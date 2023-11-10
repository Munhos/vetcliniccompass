import { Request, Response } from "express";
import clients from "../../database/dados";


export const updateTutor = (req:Request, res:Response) => {
    var userId = req.params.id;
    const userIdnum = parseInt(userId,10);

    clients.forEach((client, position) => {
        if(client.id === userIdnum){
            clients[position] = req.body;
        }
    })

    return res.send("Trocou");
    
}