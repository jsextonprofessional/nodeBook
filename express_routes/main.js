const homeController = require("./controllers/homeController");

const port = 3000,
	express = require("express"),
	app = express();

	app.use((req, res, next) => {
		console.log(`request made to: ${req.url}`);
		console.log(req.query);
		next();
	});

	app.use(express.urlencoded({
		extended: false
	})
	);
	
	app.use(express.json());

	// app.get("/items/:vegetable", (req, res) => {
		// 	res.send(req.params.vegetable);
		// })

	// app.get("/items/:vegetable", (req, res) => {
	// 	let veg = req.params.vegetable;
	// 	res.send(`This is the page for ${veg}`);

	// IN MVC THIS ^ BECOMES THIS:

	app.get("/items/:vegetable", homeController.sendReqParam);

	// app.post("/", (req, res) => {
	// 	console.log(req.body);
	// 	console.log(req.query);
	// 	res.send("POST successful.");
	// });

	// THIS ^ TO THIS:

	app.post("/", homeController.logRequestPaths);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
})