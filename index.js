
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/config.js";
import mentorRouter from "./Routers/mentorRoute.js";
import studentRouter from './Routers/studentRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 5000;
connectDB();

app.use('/api', mentorRouter);
app.use('/api', studentRouter);

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the app");
});

app.listen(port, () => {
    console.log('App is running on port');
});