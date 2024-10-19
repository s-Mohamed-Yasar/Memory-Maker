import express from "express";
import connectDb from "./db/db.js"
import path from "path";
import { fileURLToPath } from "url"
import router from "./config/router.js"
import cors from "cors";
import dotenv from "dotenv"

 
dotenv.config()
const app = express();
const port = process.env.PORT;
const __dirname = path.dirname(fileURLToPath(import.meta.url))

connectDb()

app.use(express.json())

app.use(express.static(path.join(__dirname,"/client/dist")))
app.use(cors())

app.use("/api/data",router)

app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname, "/client/dist/index.html"));
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port} `);
})
