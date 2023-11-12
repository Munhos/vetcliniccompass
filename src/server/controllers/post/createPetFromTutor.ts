import { Response, Request } from "express";
/*import clients, { idsClientesUtilizados } from "../../database/dados";
import { idsPetsUtilizados } from "../../database/dados";

export const createPetFromTutor = (req:Request, res:Response) => {
    const tutorId = req.params.tutorId;
    const dadoPet = req.body;


    let idPetExist = false
    for(let x of idsPetsUtilizados){
        if(x === dadoPet.id){
            idPetExist = true
        }
    }


    
    if(idPetExist){
        return res.send("Id de pet ja existe");
    }else{
        clients.forEach((client) => {
            if(client.id == tutorId){
                client.pets.push(dadoPet)
                return res.send("Adicionado")
            }
        })

        idsPetsUtilizados.push(dadoPet.id)
    }
    

}*/

import Tutor from "../../database/models/tutors";
import Pets from "../../database/models/pets";
export const createPetFromTutor = async(req:Request, res:Response) => {
    const userId= req.params.id;
    

    await Pets.create({
        id: req.body.id,
        idTutor: req.body.idTutor,   //REVISAR, NAO ESTA FUNCIONANDO
        name: req.body.name,
        species: req.body.species,
        carry: req.body.carry,
        weight: req.body.weight,
        date_of_birth: req.body.date_of_birth
    })

    return res.send("Criado")
}