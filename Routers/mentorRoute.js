import express from "express";
import { assignStudents, createMentor, getMentors, getStudentsForMentor, assignMentor } from "../Controllers/mentorController.js";

const router = express.Router();

router.post('/create-mentor', createMentor);
router.put('/assign-students/:id', assignStudents);
router.get('/get-mentors', getMentors);
router.get('/students-for-mentor/:id', getStudentsForMentor);
router.put('/assign-mentor/:id', assignMentor);

export default router;