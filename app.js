const express = require("express")
const app = express();
const RouterAddClotch = require("./routes/AddclotchRouter")
const AdminRouter = require("./routes/AdminRouter")
const handlebars = require("express-handlebars")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const Usuarios = require("./models/Users")


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
//arquivos estáticos............................................
app.use('/', express.static("public"));
//handlebars config---------------------------------------------
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));
app.set('view engine', 'handlebars');

//config-session---------------------------------------

const session = require('express-session')
const oneHour = 60000 * 60

app.use(session({
    secret: "%%4adakjA2-2329@9281242(*&4S2AjhAS54s",
    saveUninitialized: true,
    cookie: { maxAge: oneHour },
    resave: true
}))

app.use(
    express.urlencoded({
        extended: true
    }),
)

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())






//ROTAS----------------------------------------------------------------------------------------------------------------------------------------------------------------

app.use("/admin",AdminRouter)
app.use("/routeraddclotch", RouterAddClotch)

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/login", (req, res) => {
    res.json({ msg: "tela de login" })
})

app.get("/logout",(req,res)=>{
    req.session.destroy()
    res.send("sessão encerrada")
})

app.post("/loginauth", async (req, res) => {
    if (req.session.userauth) {
        return res.send("já existe uma sessão aberta")
    }
    const currentuser = await Usuarios.findOne({ email: req.body.email })

    if(!currentuser){
        return res.send("o usuário não foi encontrado")
    }

    if (req.body.password == currentuser.password) {
        req.session.userauth = true;
        return res.send("o usuário está logado")
    } else {
        return res.send("senha incorreta")
    }

})

app.post("/registration", async (req, res) => {
    if (req.body.confirmpass !== req.body.password) {
        return res.send("as senhas não batem")
    }

    await Usuarios.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(() => {
        res.send("usuário criado com sucesso");
    }).catch(err => {
        res.send("houve um erro ao criar usuário", err);
    })
})




//mongodb-connect..............................................................................................................................
mongoose.connect("mongodb+srv://daniel_arruda:ttbKP6KEsF9nMV7Z@plinioroupas-cluster.tiojul9.mongodb.net/plinioapi?retryWrites=true&w=majority").then(() => {
    console.log("conectado ao banco de dados com sucesso");
}).catch((err) => {
    console.log(err);
})

const PORT = 2729
app.listen(PORT, () => {
    console.log("servidor rodando com sucesso na porta", PORT);
})