const express = require("express")
const controlador = require("./controlador")

const routes = express.Router()
routes.get("/",controlador.getAllPessoas)
routes.get("/:id",controlador.getPessoaById)
routes.post("/",controlador.createPessoa)
routes.put("/:id",controlador.updatePessoa)
routes.delete("/:id",controlador.deletePessoa)

module.exports = routes