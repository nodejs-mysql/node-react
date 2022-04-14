import express from "express";
 
import { 
    getAllVacancies,
    createVacancie,
    getVacancieById,
    updateVacancie,
    deleteVacancie
} from "../controllers/Vacancies.js";
 
const router = express.Router();
 
router.get('/', getAllVacancies);
router.get('/:id', getVacancieById);
router.post('/', createVacancie);
router.patch('/:id', updateVacancie);
router.delete('/:id', deleteVacancie);
 
export default router;
