const express = require("express")
const routes = require("../controlador")

routes.get("/pessoas",controlador.getAllPessoas)
routes.get("/pessoas/:id",controlador.getPessoaById)
routes.post("/pessoas",controlador.createPessoa)
routes.put("/pessoas/:id",controlador.updatePessoa)
routes.delete("/pessoas/:id",controlador.deletePessoa)
//routes.get("/",(req,res)=>{
//    res.status(200).json(lista);
//});    
//
//routes.get("/:id",(req,res)=>{
//    res.status(200).json(lista[req.params.id-1]);
//});

module.exports = routes