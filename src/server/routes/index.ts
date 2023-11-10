import { Router, response } from "express";
const router = Router();


import { revealTutors } from "../controllers/get/returnTutors";
import { addTutor } from "../controllers/post/addTutor";
import { updateTutor } from "../controllers/put/updateTutor";

//--GET-----
router.get("/tutors",revealTutors);

//--POST----
router.post("/tutor", addTutor);

//--PUT-----
router.put("/tutor/:id" , updateTutor);

export {router};