const homeController = require("./controllers/homeController");

const port = 3000,
	express = require("express"),
	app = express();

	app.use((req, res, next) => {
		console.log(`request made to: ${req.url}`);
		next();
	});

	app.use(express.urlencoded({
		extended: false
	})
	);
	
	
	// app.get("/items/:vegetable", (req, res) => {
		// 	res.send(req.params.vegetable);
		// })
		
		app.get("/items/:vegetable", (req, res) => {
			let veg = req.params.vegetable;
			res.send(`This is the page for ${veg}`);
			
			
		app.use(express.json());
	
		app.post("/", (req, res) => {
			console.log(req.body);
			console.log(req.query);
			res.send("POST successful.");
		});
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
})