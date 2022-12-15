const AdminRouter = require("express").Router();


AdminRouter.get("/",(req,res)=>{
    res.render("login")
})

AdminRouter.post("/loginauth",(req,res)=>{
    if(req.body.pass === 1234 && req.body.name === "admin"){
        req.session.adminlogin = true;
        res.send("admin logado")
    }else{
        res.send("credenciais incorretas")
    }
})



module.exports = AdminRouter;