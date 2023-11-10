import { Router, response } from "express";
const router = Router();


import { revealTutors } from "../controllers/get/returnTutors";
import { addTutor } from "../controllers/post/addTutor";

//--GET-----
router.get("/tutors",revealTutors)

//--POST----
router.post("/tutor", addTutor)


export {router};