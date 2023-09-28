import express from "express";
import mongoose from "mongoose";
import Persona from "./models/persona.js";

//se crea el servidor
const app = express();

//middleware
app.use(express.json())

//ruta get /
app.get("/", async(req, res) => {
    res.json(await Persona.find())

});


//ruta post
app.post("/", async(req, res)=>{
  try{
    const persona = await Persona.create(req.body);
    res.json({
      "Estado": "OK"
    })
    
  }catch (error){
    console.log(error.message)
  }

} )


//update
app.put("/:id", async(req, res)=>{
  try {
    const {id}= req.params;
    const persona = await Persona.findByIdAndUpdate(id, req.body);
    res.json("Persona actualizada")
    
  } catch (error) {
    res.json(error.message)
  }


})

//delete
app.delete("/:id", async(req, res)=>{
  try {
    const {id}= req.params;
    const persona = await Persona.findByIdAndRemove(id);
    res.json("Persona eliminada")
    
  } catch (error) {
    res.json(error.message)
  }


})


//conexión a la bd
mongoose.connect(
  "mongodb://userbd:otXhM4RolaOxGcBG@cluster0-shard-00-00.hgkh4.mongodb.net:27017,cluster0-shard-00-01.hgkh4.mongodb.net:27017,cluster0-shard-00-02.hgkh4.mongodb.net:27017/arquitectura?ssl=true&replicaSet=atlas-mg7654-shard-0&authSource=admin&retryWrites=true&w=majority"
).then(()=>{
    console.log("Connected on mongoDB Arquitectura")
}).catch((error)=>{
    console.log(error)
})

export default app;
