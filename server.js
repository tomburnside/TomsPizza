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

if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}
