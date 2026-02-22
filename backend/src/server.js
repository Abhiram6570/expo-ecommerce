import express from "express";
import "dotenv/config";
import path from "path";
import { ENV } from "./config/env.js";



const app = express();
const port =  Number(ENV.PORT) || 8080;
const __dirname = path.resolve();

app.get("/api/health",(req,res)=>{
    res.status(200).json({message:"success"});
});

if(ENV.NODE_ENV == "production"){
    app.use(express.static(path.join(__dirname,"../admin/dist")));

    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../admin","dist","index.html"));
    })
}


app.listen(port,()=>{
    
    console.log("Server started successfully at port number is :",port);
});