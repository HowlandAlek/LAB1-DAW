let express = require("express");
let app = express();

app.get("/", (req, res) => {
	// Enviar página
	res.render("pages/home", {
		title: "Home",
		usuario: {
			nombre: "Alek",
		},
	});
});

app.get("/altas", (req, res) => {
	res.send("Bienvenido a Altas");
});

module.exports = app;
