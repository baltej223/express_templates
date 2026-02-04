import express from "express";
import dotenv from "dotenv";
import pino from "pino-http"; // logger 
dotenv.config();

import { connectDB } from "./db/database.js";
import HandleLogin from "./routes/auth/login/main.js";
import CreateAccount from "./routes/create_acc.js"; 
import VerifyJson from "./middlewares/JSON_Verify.js"

connectDB();

const app = express();
app.use(express.json());
app.use(VerifyJson);
app.use(pino());

app.post("/login", HandleLogin);
app.post("/create_acc", CreateAccount);

app.get("/", (req, res)=> res.send("Hearbeat Received!"));

app.listen(process.env.PORT, () => {
  console.log("Running on port", process.env.PORT);
});
