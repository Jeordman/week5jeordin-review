//use express to set up our server
const express = require("express");

//grab my controller and save it to a variable
const cc = require("./controllers/carController");

//normally server port should be in the .env
const port = 9000;

//app is express invoked
const app = express();

//formats our json
app.use(express.json());

//endpoints here
app.get("/api/cars", cc.getCars);
app.post('/api/cars', cc.addCar)

//this listen is the final step in getting our server to run
app.listen(port, () => {
  console.log(`His server... It's over ${port}`);
});
