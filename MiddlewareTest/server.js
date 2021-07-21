const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = 3000;

// Se ejecuta en todas las rutas
// app.use(logger);

// Middleware se declaran antes que las rutas
function logger(req, res, next) {
	console.log(`Petición recibida.`);
	next();
}

app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.send("Bienvenidos");
});

// Middleware solo se ejecuta en la ruta de usuarios
// app.get("/usuarios", logger, (req, res) => {
// 	res.send("Usuarios");
// });

app.listen(PORT, () => {
	console.log("Server running on port: " + PORT);
});
