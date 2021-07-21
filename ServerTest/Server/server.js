// Creación de server utilizando express
const express = require("express");

const app = express();

// Se declara un get por cada ruta
app.get("/", (req, res) => {
	res.send("GET REQUEST");
});

// Se declara una ruta de postñ
app.post("/about", (req, res) => {
	res.send("POST REQUEST");
});

app.put("/contact", (req, res) => {
	res.send("PUT REQUEST");
});

app.delete("/delete", (req, res) => {
	res.send("DELETE REQUEST");
});

app.listen(3000, () => {
	console.log("Server running");
});
