import { Request, Response } from "express";
import Tutor from "../../database/models/tutors";
import Pets from "../../database/models/pets";

export const updatePet = async(req:Request, res:Response) => {
    //VERIFICAÇÕES PARA VER SE PET EXISTE
    const existPet = await Pets.findOne({id: req.body.id});

    const petId = req.params.petId;
    
    if(!existPet){
        await Pets.updateOne({id: petId}, req.body);

        return res.send("Pet atualizado.");
    }else{
        return res.send("Pet não existe");
    }

    
}