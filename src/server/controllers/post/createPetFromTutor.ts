import { Response, Request } from "express";
import Tutor from "../../database/models/tutors";
import Pets from "../../database/models/pets";

export const createPetFromTutor = async(req:Request, res:Response) => {
    
    //VERIFICAÇÕES PARA VER SE TUTOR E PET EXISTE
    const existTutorPet = await Tutor.findOne({id: req.body.idTutor});
    const existPet = await Pets.findOne({id: req.body.id})

    if(existTutorPet){
        if(!existPet){
            await Pets.create({
                id: req.body.id,
                idTutor: req.body.idTutor,
                name: req.body.name,
                species: req.body.species,
                carry: req.body.carry,
                weight: req.body.weight,
                date_of_birth: req.body.date_of_birth
            })
        
            return res.send("Criado");
        }else{
            return res.send("Id de pet ja existe");
        }
        
    }else{
        return res.send("Tutor não existe");
    }

    
}