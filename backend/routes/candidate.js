import express from "express";

import {
	getAllCandidates, 
    createCandidate
} from "../controllers/Candidates.js";
 
const router = express.Router();

router.get('/', getAllCandidates);
router.post('/', createCandidate);
 
export default router;
