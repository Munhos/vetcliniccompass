import { Request, Response } from "express";

import Tutor from "../../database/models/tutors";
import Pets from "../../database/models/pets";

export const deletePetFromTutor = async(req: Request, res:Response) => {
    const userId = req.params.tutorId;   //PARA QUE VAI SER USADO?
    const petId = req.params.petId;
    

    await Pets.deleteOne({id: petId});

    return res.send("Pet deletado");

}