const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const app = express();

//dotenv
require("dotenv").config()

//constantes y variables
const port = process.env.PORT || 5000;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const dbname = process.env.DB_NAME;
const uri = `mongodb+srv://${user}:${pass}@cluster0.nlyfg.mongodb.net/${dbname}?retryWrites=true&w=majority`

//conexión con bases de Datos
mongoose.connect(uri)
	.then(console.log("Base de Datos Conectada!"))
	.catch(e => console.log(e))

//importando archivos estáticos
app.use(express.static(__dirname + "/public"));

//body parses!
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

//vistas y ejs, (archivos dinámicos)
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//métodos get!

app.get("/", require("./routers/Get.js"));
app.get("/create", require("./routers/Get.js"));
app.get("/:id", require("./routers/Get.js"));
app.post("/", require("./routers/Post.js"))
app.delete("/:id", require("./routers/Delete.js"));
app.put("/:id", require("./routers/Update.js"))

//Error si no existe la página.
app.use((req, res, next) => {
	res.status(404).render("error");
})

//abriendo el servidor:
app.listen(port, () => {
	console.log(`Abriendo el Servidor en el puerto ${port}`)
})