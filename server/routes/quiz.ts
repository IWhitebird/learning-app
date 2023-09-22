import express, { Router } from "express";

const router : Router = express.Router();

import {
    getAllQuiz,
    getSingleQuiz,
    createQuiz,
    createAssignment,
    createQuestion
} from "../controllers/quiz";


import {
    auth,
    isAdmin,
} from "../middleware/auth";

router.get("/getAllQuizes",auth, getAllQuiz);
router.get("/getSingleQuiz/:quizId" ,auth, getSingleQuiz);
router.post("/createQuiz",auth, createQuiz);
router.post("/createAssignment/:quizId",auth, createAssignment);
router.post("/createQuestion/:assignmentId",auth, createQuestion);

export default router;
