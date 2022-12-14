const RouterAddClotch = require("express").Router();
const Bermudas = require("../models/Bermudas")
const Blusas = require("../models/Blusas")
const Calcas = require("../models/Calcas")
const Camisas = require("../models/Camisas")
const Shorts = require("../models/Shorts")
const Vestidos = require("../models/Vestidos")


RouterAddClotch.get("/", (req, res) => {
    res.send("entrando em rota de adicionar roupas")
})

RouterAddClotch.post("/addclotchs", async (req, res) => {
    if (!req.session.adminlogin) {
        return res.redirect("/")
    }
    switch (req.body.categories) {
        case "Blusas":
            Blusas.create({
                descri: req.body.descri,
                size: req.body.size,
                categories: "Blusas",
                img: req.body.img
            })
            break;
        case "Bermudas":
            Bermudas.create({
                descri: req.body.descri,
                size: req.body.size,
                categories: "Bermudas",
                img: req.body.img
            })
            break;
        case "Calcas":
            Calcas.create({
                descri: req.body.descri,
                size: req.body.size,
                categories: "Calcas",
                img: req.body.img
            })
            break;
        case "Camisas":
            Camisas.create({
                descri: req.body.descri,
                size: req.body.size,
                categories: "Camisas",
                img: req.body.img
            })
            break;
        case "Shorts":
            Shorts.create({
                descri: req.body.descri,
                size: req.body.size,
                categories: "Shorts",
                img: req.body.img
            })
            break;
        case "Vestidos":
            Vestidos.create({
                descri: req.body.descri,
                size: req.body.size,
                categories: "Vestidos",
                img: req.body.img
            })
            break;
        default:
            break;
    }
})

RouterAddClotch.get("/deleteclotchs/:categories/:id", async (req, res) => {
    if (!req.session.adminlogin) {
        return res.redirect("/")
    }
    switch (req.params.categories) {
        case "Blusas":
            await Blusas.findOneAndDelete({ _id: req.params.id }).then(() => {
                res.send("item excluído com sucesso")
            })
            break;
        case "Bermudas":
            await Bermudas.findOneAndDelete({ _id: req.params.id }).then(() => {
                res.send("item excluído com sucesso")
            })
            break;
        case "Calcas":
            await Calcas.findOneAndDelete({ _id: req.params.id }).then(() => {
                res.send("item excluído com sucesso")
            })
            break;
        case "Camisas":
            await Camisas.findOneAndDelete({ _id: req.params.id }).then(() => {
                res.send("item excluído com sucesso")
            })
            break;
        case "Shorts":
            await Shorts.findOneAndDelete({ _id: req.params.id }).then(() => {
                res.send("item excluído com sucesso")
            })
            break;
        case "Vestidos":
            await Vestidos.findOneAndDelete({ _id: req.params.id }).then(() => {
                res.send("item excluído com sucesso")
            })
            break;
        default:
            break;
    }
})

module.exports = RouterAddClotch;