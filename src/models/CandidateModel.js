import db from "../config/database/db";
import { DataTypes } from "sequelize";

const CandidateModel = db.define('candidates', {
    name: { type: DataTypes.STRING},
    lastname: { type: DataTypes.STRING},
    phoneNumber: { type: DataTypes.STRING},
    email: { type: DataTypes.STRING},
    civilId: { type: DataTypes.STRING},
    address: { type: DataTypes.STRING},
    genre: { type: DataTypes.CHAR},
    politicalParty: { type: DataTypes.STRING}
});

export default CandidateModel;