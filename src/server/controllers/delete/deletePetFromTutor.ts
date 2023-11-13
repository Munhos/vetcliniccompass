import { Request, Response } from "express";
import Pets from "../../database/models/pets";

export const deletePetFromTutor = async(req: Request, res:Response) => {
    //VERIFICAÇÕES PARA VER SE PET EXISTE
    const petId = req.params.petId;
    const existPetId = await Pets.findOne({id: petId});
    
    if(existPetId){
        await Pets.deleteOne({id: petId});
        return res.send("Pet deletado.");
    }else{
        return res.send("Pet não existe.");
    }
}