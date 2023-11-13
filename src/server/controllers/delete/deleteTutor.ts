import { Request, Response } from "express";
import Tutor from "../../database/models/tutors";
import Pets from "../../database/models/pets";


export const deleteTutor = async(req:Request, res:Response) => {
    const userId= req.params.id;
    const existTutorId = await Tutor.findOne({id: userId});

    if(existTutorId){
        await Tutor.deleteOne({id: userId});
        await Pets.deleteMany({idTutor: userId});

        return res.send("Tutor e todos os pets associados deletados.");
    }else{
        return res.send("Tutor não existe");
    }
    
}