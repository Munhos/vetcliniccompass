import { Request, Response } from "express";
import Tutor from "../../database/models/tutors";
import Pets from "../../database/models/pets";

export const addTutor = async(req:Request, res:Response) =>{

    //VERIFICAÇÕES PARA VER SE TUTOR E PET EXISTE
    const existTutorId = await Tutor.findOne({id: req.body.id});
    let existPetId = false;

    for (let x = 0; x < req.body.pets.length; x++) {
        const pet = await Pets.findOne({ id: req.body.pets[x].id });
        if (pet) {
            existPetId = true;
            break;
        }
    }
    

    if(!existTutorId){
        if(!existPetId){
            if(req.body.pets.length > 0){
                const {id, name, phone, email, date_of_birth, zipCode} = req.body;
                const dataUser = {id, name, phone, email, date_of_birth, zipCode};
    
                await Tutor.create(dataUser);
    
                for (let x = 0; x < req.body.pets.length; x++) {
                    const { id, idTutor, name, species, carry, weight, date_of_birth } = req.body.pets[x];
                    const dataPets = { id, idTutor, name, species, carry, weight, date_of_birth };
                    await Pets.create(dataPets);
                    return res.send('Tutor e pet criados.');
            }
            }else{
                return res.send('Impossível criar tutor sem pet vinculado');
            }


           
        }else{
            return res.send("Id de pet ja existe");
        }
    }else{
        return res.send("Id de tutor ja existe");
    }

    
}