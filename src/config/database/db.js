import { Sequelize } from "sequelize";

const db = new Sequelize('elecciones', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;