let express = require("express");
let app = express();

app.get("/", (req, res) => {
	let items = [
		{ name: "node.js", url: "https://nodejs.org/en/" },
		{ name: "ejs", url: "https://ejs.co" },
		{ name: "expressjs", url: "https://expressjs.com" },
	];

	res.render("pages/admin", { title: "admin", items });
});

app.get("/altas", (req, res) => {
	res.send("Bienvenido a Admin Altas");
});

module.exports = app;
