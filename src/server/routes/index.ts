import { Router, response } from "express";
const router = Router();


import { revealTutors } from "../controllers/get/returnTutors";
import { addTutor } from "../controllers/post/addTutor";
import { updateTutor } from "../controllers/put/updateTutor";
import { deleteTutor } from "../controllers/delete/deleteTutor";
import { createPetFromTutor } from "../controllers/post/createPetFromTutor";

//--GET-----
router.get("/tutors",revealTutors);

//--POST----
router.post("/tutor", addTutor);

router.post("/pet/:tutorId", createPetFromTutor)

//--PUT-----
router.put("/tutor/:id" , updateTutor);

//router.put("/pet/:petId/tutor/:tutorId", updatePet);

//--DELETE--
router.delete("/tutor/:id", deleteTutor);

export {router};