const RouterAddClotch = require("express").Router();


RouterAddClotch.get("/", (req, res) => {
    res.send("entrando em rota de adicionar roupas")
})

RouterAddClotch.post("/addclotchs", async (req, res) => {
    if (!req.session.adminlogin) {
        return res.send("você não está logado")
    }
    if (!req.body.descri) {
        return res.send("informação inválida")
    }
    switch (req.body.categories) {
        case "Blusas":
            const Blusas = require("../models/Blusas")
            Blusas.create({
                descri: req.body.descri,
                size: req.body.size,
                categories: "Blusas",
                img: req.body.img
            }).then(()=>{
                res.send("blusa adicionada com sucesso")
            })
            break;
        case "Bermudas":
            const Bermudas = require("../models/Bermudas")
            Bermudas.create({
                descri: req.body.descri,
                size: req.body.size,
                categories: "Bermudas",
                img: req.body.img
            }).then(()=>{
                res.send("bermuda adicionada com sucesso")
            })
            break;
        case "Calcas":
            const Calcas = require("../models/Calcas")
            Calcas.create({
                descri: req.body.descri,
                size: req.body.size,
                categories: "Calcas",
                img: req.body.img
            }).then(()=>{
                res.send("Calça adicionada com sucesso")
            })
            break;
        case "Camisas":
            const Camisas = require("../models/Camisas")
            Camisas.create({
                descri: req.body.descri,
                size: req.body.size,
                categories: "Camisas",
                img: req.body.img
            }).then(()=>{
                res.send("Camisa adicionada com sucesso")
            })
            break;
        case "Shorts":
            const Shorts = require("../models/Shorts")
            Shorts.create({
                descri: req.body.descri,
                size: req.body.size,
                categories: "Shorts",
                img: req.body.img
            }).then(()=>{
                res.send("Short adicionada com sucesso")
            })
            break;
        case "Vestidos":
            const Vestidos = require("../models/Vestidos")
            Vestidos.create({
                descri: req.body.descri,
                size: req.body.size,
                categories: "Vestidos",
                img: req.body.img
            }).then(()=>{
                res.send("vestido adicionada com sucesso")
            })
            break;
        default:
            res.send("erro desconhecido")
            break;
    }
})




RouterAddClotch.get("/deleteclotchs/:categories/:id", async (req, res) => {
    if (!req.session.adminlogin) {
        return res.send("você não está logado")
    }
    
    switch (req.params.categories) {
        case "blusas":
            const Blusas = require("../models/Blusas");
            await Blusas.findOneAndDelete({ _id: req.params.id }).then(() => {
                res.send("item excluído com sucesso")
            }).catch(()=>{
                res.send("houve um erro ao tentar excluir esta blusa")
            })
            break;
        case "bermudas":
            const Bermudas = require("../models/Bermudas");
            await Bermudas.findOneAndDelete({ _id: req.params.id }).then(() => {
                res.send("item excluído com sucesso")
            })
            break;
        case "calcas":
            const Calcas = require("../models/Calcas")
            await Calcas.findOneAndDelete({ _id: req.params.id }).then(() => {
                res.send("item excluído com sucesso")
            })
            break;
        case "camisas":
            const Camisas = require("../models/Camisas");
            await Camisas.findOneAndDelete({ _id: req.params.id }).then(() => {
                res.send("item excluído com sucesso")
            })
            break;
        case "shorts":
            const Shorts = require("../models/Shorts")
            await Shorts.findOneAndDelete({ _id: req.params.id }).then(() => {
                res.send("item excluído com sucesso")
            })
            break;
        case "vestidos":
            const Vestidos = require("../models/Vestidos")
            await Vestidos.findOneAndDelete({ _id: req.params.id }).then(() => {
                res.send("item excluído com sucesso")
            })
            break;
        default:
            res.send("categoria inválida")
            break;
    }
})

RouterAddClotch.get("/editclotchs/:id",(req,res)=>{
    res.send("editando roupas")
})

module.exports = RouterAddClotch;