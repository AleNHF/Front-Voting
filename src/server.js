import express from "express";
import cors from "cors";
import db from "./config/database/db";
import candidateRoute from "./routes/routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/candidates', candidateRoute);

(async () => {
  try {
    await db.authenticate();
    console.log('Conexión exitosa a la DB');
  } catch (error) {
    console.log(`Error de conexión: ${error}`);
  }

  app.get('/', (req, res) => {
    res.send('HOLA MUNDO');
  });

  app.listen(8000, () => {
    console.log('Servidor en ejecución en localhost');
  });
})();
