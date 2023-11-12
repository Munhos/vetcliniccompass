import { Request, Response } from "express";
/*import clients from "../../database/dados";
import { idsClientesUtilizados } from "../../database/dados";

export const deleteTutor = (req:Request, res:Response) => {
    var userId = req.params.id;
    var userIdNum = parseInt(userId, 10);
    
    const userIdnum = parseInt(userId,10);

    clients.forEach((client, position) => {
        if(client.id === userIdnum){
            clients.splice(position, 1);
        }
    })

    idsClientesUtilizados.splice(idsClientesUtilizados.indexOf(userIdNum), 1);

    return res.send("Deletou");
    
}*/
import Tutor from "../../database/models/tutors";
import Pets from "../../database/models/pets";

export const deleteTutor = async(req:Request, res:Response) => {
    const userId= req.params.id;

    await Tutor.deleteOne({id: userId});
    await Pets.deleteMany({idTutor: userId});

    return res.send("Deletado");
}