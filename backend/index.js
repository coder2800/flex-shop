const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const productsRoutes = require('./routes/products');
const client = require("./configs/database");

const app = express();

app.use(express.json());
app.use(cors());

client.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log("connected to database");
})

app.get('/', (req, res) => {
    res.send("Now, Port:8000 is working!");
})

app.use("/api", authRoutes);
app.use("/products", productsRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});