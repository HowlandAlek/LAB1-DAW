let config = require("./config");
let express = require("express");
let morgan = require("morgan");

let app = express();
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let index = require("./routes/index");
let admin = require("./routes/admin");

app.use("/", index);
app.use("/admin", admin);

app.listen(config.app.port, () => {
	console.log("Server running on port " + config.app.port);
});
