import { Request, Response } from "express";
import clients from "../../database/dados";
import { parse } from "path";

export const deleteTutor = (req:Request, res:Response) => {
    var userId = req.params.id;
    const userIdnum = parseInt(userId,10);

    clients.forEach((client, position) => {
        if(client.id === userIdnum){
            clients.splice(position, 1);
        }
    })

    return res.send("Deletou");
    
}