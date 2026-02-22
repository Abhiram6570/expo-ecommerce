import express from "express";
import "dotenv/config";


const app = express();
const port =  parseInt(process.env.PORT || 9000);



app.listen(port,()=>{
    
    console.log("Server started successfully at port number is :",port);
});