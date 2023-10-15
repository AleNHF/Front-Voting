import db from "../config/database/db";
import { DataTypes } from "sequelize";

const VoterModel = db.define('voters', {
    name: { type: DataTypes.STRING},
    lastname: { type: DataTypes.STRING},
    phoneNumber: { type: DataTypes.STRING},
    email: { type: DataTypes.STRING},
    civilId: { type: DataTypes.STRING},
    address: { type: DataTypes.STRING},
    genre: { type: DataTypes.CHAR},
    birthday: { type:DataTypes.DATE},
    occupation: { type:DataTypes.STRING},
});

export default VoterModel;