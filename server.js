import express from "express";
import mongoose from "mongoose";

//se crea el servidor
const app = express();

app.get("/", (req, res) => {
  res.json({
    nombre: "Todos los archivos",
  });
});

mongoose.connect(
  "mongodb://userbd:otXhM4RolaOxGcBG@cluster0-shard-00-00.hgkh4.mongodb.net:27017,cluster0-shard-00-01.hgkh4.mongodb.net:27017,cluster0-shard-00-02.hgkh4.mongodb.net:27017/arquitectura?ssl=true&replicaSet=atlas-mg7654-shard-0&authSource=admin&retryWrites=true&w=majority"
).then(()=>{
    console.log("Connected on mongoDB Arquitectura")
}).catch((error)=>{
    console.log(error)
})

export default app;
