const express = require("express");

const cc = require("./controllers/carController");

//controller

const port = 9000;

const app = express();

app.use(express.json());

app.get("/api/cars", cc.getCars);
app.post('/api/cars', cc.addCar)

app.listen(port, () => {
  console.log(`His server... It's over ${port}`);
});
