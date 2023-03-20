import express from "express";
import cors from "cors";
import  login  from "./routers/signIn.js";

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(login)

export {app}