import { Request, Response } from "express";

import Tutor from "../../database/models/tutors";
import Pets from "../../database/models/pets";

export const deletePetFromTutor = async(req: Request, res:Response) => {
    
    const petId = req.params.petId;
    const existPetId = await Pets.findOne({id: petId});
    
    if(existPetId){
        await Pets.deleteOne({id: petId});
        return res.send("Pet deletado");
    }else{
        return res.send("Pet não existe");
    }
    

}