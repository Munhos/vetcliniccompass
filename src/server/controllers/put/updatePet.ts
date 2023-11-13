import { Request, Response } from "express";
/*import {idsClientesUtilizados, idsPetsUtilizados} from "../../database/dados";



export const updatePet = (req:Request, res:Response) => {
    const petId = req.params.petId;
    const petIdNumber = parseInt(petId, 10);
    const tutorId = req.params.tutorId;
    const tutorIdNumber = parseInt(tutorId, 10);

    let idTutorExist = false
    for(let x of idsClientesUtilizados){
        if(x === tutorIdNumber){
            idTutorExist = true
            break;
        }
    }

    let idPetExist = false
    for(let x of idsPetsUtilizados){
        if(x === petIdNumber){
            idPetExist = true
            break;
        }
    }

    if (idPetExist){
        return res.send("ID TUTOR EXISTE")
    }

}*/

import Tutor from "../../database/models/tutors";
import Pets from "../../database/models/pets";

export const updatePet = async(req:Request, res:Response) => {
    const userId = req.params.tutorId;   //PARA QUE VAI SER USADO?
    const petId = req.params.petId;
    

    await Pets.updateOne({id: petId}, req.body);

    return res.send("Pet atualizado")
}