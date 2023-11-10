import { Request, Response } from "express";
import clients from "../../database/dados";

export const revealTutors = (req:Request, res:Response) => {
    res.json(clients)
}

