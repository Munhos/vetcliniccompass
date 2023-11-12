import { Request, Response } from "express";

import Tutor from "../../database/models/tutors";
import Pets from "../../database/models/pets";
/*import clients from "../../database/dados";

export const revealTutors = (req:Request, res:Response) => {
    res.json(clients)
}*/

export const revealTutors = async (req:Request, res:Response) => {
    const showUser = await Tutor.find()
    const showPets = await Pets.find()

    const result = {
        tutors: showUser,
        pets: showPets
    }

    return res.json(result);
}
