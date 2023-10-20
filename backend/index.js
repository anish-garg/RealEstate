import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import cors from 'cors';
dotenv.config();
import { userRoute } from "./routes/userRoute.js";
import { residencyRoute } from "./routes/residencyRoute.js";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

app.use("/api/user", userRoute);
app.use("/api/residency", residencyRoute)