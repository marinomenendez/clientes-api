import express from "express";
import clientsRouter from "./routes/clientsRoutes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

const app = express();

await connectDB();

app.use(cors());

app.use("/clients", clientsRouter);

app.listen(3000, () => {
  console.log("Servidor node iniciado app clientes-api en el puerto 3000");
});
