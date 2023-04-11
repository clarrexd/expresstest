import express from "express";
const exphbs = require("express-handlebars");
import * as movieData from "./data/movies";

const app = express();

app.engine(
	"hbs",
	exphbs.engine({
		extname: ".hbs",
		defaultLayout: "main",
	})
);
app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/movies", async (req, res) => {
	const movies = movieData.renderAll();

	res.render("movie-list", { movies });
});

app.get("/movies/:id", async (req, res) => {
	const movie = movieData.findById(req.params.id);

	res.render("movie", movie);
});

app.listen(8008, () => {
	console.log("http://localhost:8008/");
});
