import CandidateModel from "../models/CandidateModel";

//** Métodos para el CRUD */

//Mostrar todos los registros
export const getAllCandidates = async (req, res) => {
    try {
        const candidates = await CandidateModel.findAll();
        res.json(candidates);
    } catch (error) {
        res.json( {
            message: error.message
        });
    }
}

//Mostrar un candidato
export const getCandidate = async (req, res) => {
    try {
        const candidate = await CandidateModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(candidate[0]);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

//Crear un candidato
export const createCandidate = async (req, res) => {
    try {
        await CandidateModel.create(req.body);
        res.json({
            "message": "Registro creado correctamente"
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

//Actualizar un candidato
export const updateCandidate = async (req, res) => {
    try {
        await CandidateModel.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado correctamente"
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}