import express from "express";
import cookieParser from "cookie-parser";
import { connectDb } from "./configs/db";
import authRouter from "./routes/auth.route";
import { ENV } from "./configs/env";

const app = express()

app.use(express.json())
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.json("hello from Auth service")
})
app.use("/", authRouter)

app.listen(ENV.PORT,()=>{
    console.log(`auth service server running on ${ENV.PORT}`)
    connectDb()
})