// Creación de server usando Node
const http = require("http");

const server = http.createServer((req, res) => {
	res.end("Bienvenidos");
});

server.listen(3000, () => {
	console.log("Server running");
});
