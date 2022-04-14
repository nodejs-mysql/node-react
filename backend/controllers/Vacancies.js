import Vacancie from "../models/vacancieModel.js";
 
export const getAllVacancies = async (req, res) => {
    try {
        const vacancies = await Vacancie.findAll();
        res.json(vacancies);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getVacancieById = async (req, res) => {
    try {
        const vacancie = await Vacancie.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(vacancie[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createVacancie = async (req, res) => {
    try {
        await Vacancie.create(req.body);
        res.json({
            "message": "Vacancie Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateVacancie = async (req, res) => {
    try {
        await Vacancie.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Vacancie Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteVacancie = async (req, res) => {
    try {
        await Vacancie.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Vacancie Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
