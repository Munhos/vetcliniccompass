import { Response, Request } from "express";
import clients from "../../database/dados";

export const createPetFromTutor = (req:Request, res:Response) => {
    const tutorId = req.params.tutorId
    const tutorIdNum = parseInt(tutorId,10);

    clients.forEach((client) => {
        if(client.id === tutorIdNum){
            client.pets.push(req.body)
            return res.send("Adicionado")
        }
    })
}
