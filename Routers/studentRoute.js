import express from "express";
import { createStudent, changeMentor, getPreviousMentors } from "../Controllers/studentController.js";

const router = express.Router();

router.post('/create-student', createStudent);
router.put('/change-mentor/:id', changeMentor);
router.get('/previous-mentors/:id', getPreviousMentors);

export default router;