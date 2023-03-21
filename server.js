const express = require("express");
const Pizza = require("./models/pizzaModel");
const cors = require("cors");
const db = require("./db.js");
const app = express();
//test2  by Tom
//test 3 by Tom

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");

app.use("/api/pizzas", pizzasRoute); 
app.use('/api/users/', userRoute);
app.use('/api/orders/', ordersRoute);

app.get("/", (req, res) => {
  res.send("Server working " + port);
});

app.listen(port, () => console.log("Server running on port"));
