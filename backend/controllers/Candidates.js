import Candidate from "../models/candidateModel.js";

export const getAllCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.findAll();
        res.json(candidates);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const createCandidate = async (req, res) => {
    try {
        await Candidate.create(req.body);
        res.json({
            "message": "Candidate Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
