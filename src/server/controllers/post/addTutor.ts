import { Request, Response } from "express";
import clients from "../../database/dados";

export const addTutor = (req:Request, res:Response) => {
    const novoTutor = req.body;
    clients.push(novoTutor)
    res.send(req.body);
};