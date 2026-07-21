import express from "express";
import clientsRouter from "./routes/clientsRoutes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

const app = express();

await connectDB();

//Importante la configuración del cors
app.use(cors());

//Importante decirle que recibe las peticiones en json
app.use( express.json() );

app.use("/clients", clientsRouter);

app.listen(3000, () => {
  console.log("Servidor node iniciado app clientes-api en el puerto 3000");
});
