import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import pokemonRouter from "./routes/pokeRoutes.js";

const app = express();
const port = process.env.PORT || 8888;

app.use(cors());
app.use(bodyParser.json());

app.use("/pokemon", pokemonRouter);

app.listen(port, ()=>{console.log(`http://localhost:${port}/`)})