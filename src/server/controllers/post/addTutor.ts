import { Request, Response } from "express";
import Tutor from "../../database/models/tutors";
import Pets from "../../database/models/pets";
/*import clients from "../../database/dados";
import { idsClientesUtilizados } from "../../database/dados";

export const addTutor = (req:Request, res:Response) => {
    const novoTutor = req.body;

    let idTutorExist = false
    for(let x of idsClientesUtilizados){
        if(x === novoTutor.id){
            idTutorExist = true
        }
    }


    if(idTutorExist){
        return res.send("Id ja existe")
    }else{
        clients.push(novoTutor)
        res.send("Tutor adicionado");
        idsClientesUtilizados.push(novoTutor.id);
    }
};*/

export const addTutor = async(req:Request, res:Response) =>{
    const {id, name, phone, email, date_of_birth, zipCode} = req.body;
    const dataUser = {id, name, phone, email, date_of_birth, zipCode};

    await Tutor.create(dataUser);

    for (let x = 0; x < req.body.pets.length; x++) {
        const { id, idTutor, name, species, carry, weight, date_of_birth } = req.body.pets[x];
        const dataPets = { id, idTutor, name, species, carry, weight, date_of_birth };
        await Pets.create(dataPets);
      }


    return res.send(req.body)
}