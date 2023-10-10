import express from "express";
import { createCandidate, getAllCandidates, getCandidate, updateCandidate } from "../controllers/CandidateController";

const router = express.Router();

//** CRU Candidates */
router.get('/', getAllCandidates)
router.get('/:id', getCandidate)
router.post('/', createCandidate)
router.put('/:id', updateCandidate)

export default router;