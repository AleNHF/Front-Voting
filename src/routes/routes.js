import express from "express";
import { createCandidate, getAllCandidates, getCandidate, updateCandidate } from "../controllers/CandidateController";

const router = express.Router();

//** CRU Candidates */
router.get('/', getAllCandidates)
router.get('/:id', getCandidate)
router.post('/', createCandidate)
router.put('/:id', updateCandidate)

//** CRUD Votantes */
router.get('/', getAllVoters)
router.get('/:id', getVoter)
router.post('/', createVoter)
router.put('/:id', updateVoter)

export default router;
