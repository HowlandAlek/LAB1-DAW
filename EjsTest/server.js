const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

let usuario = {
	nombre: "Alek",
	perfil: "admin",
};

let usuario2 = {
	nombre: "Camila",
	perfil: "user",
};

app.get("/", (req, res) => {
	res.render("pages/home", { usuario2 });
});

app.get("/contact", (req, res) => {
	res.render("pages/contact");
});

app.listen(port, () => {
	console.log("Server running on port: " + port);
});
