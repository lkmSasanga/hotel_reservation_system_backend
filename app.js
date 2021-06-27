const app = require("express")();
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(cors());

const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;

const connection = mongoose.connection;
connection
    .once("open", () => {
        console.log("MongoDB database connection established successfully");
    })
    .on("error", function(err) {
        console.log("Error", err);
    });
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// app.use(app.json());

app.get("/", function(req, res) {
    res.send("Welcome to API!");
});

let v1 = require("./routes");

app.use("/", v1.router);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});