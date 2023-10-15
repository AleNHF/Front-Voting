import VoterModel from "../models/VoterModel";

//** Métodos para el CRUD */

//Mostrar todos los registros
export const getAllVoters = async (req, res) => {
    try {
        const voter = await VoterModel.findAll();
        res.json(voters);
    } catch (error) {
        res.json( {
            message: error.message
        });
    }
}

//Mostrar un votante
export const getVoter = async (req, res) => {
    try {
        const voter = await VoterModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(voter[0]);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

//Crear un votante
export const createVoter = async (req, res) => {
    try {
        await VoterModel.create(req.body);
        res.json({
            "message": "Registro creado correctamente"
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

//Actualizar un votante
export const updateVoter = async (req, res) => {
    try {
        await VoterModel.update(req.body, {
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