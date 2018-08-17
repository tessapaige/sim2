require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const cb = require("./controller");

const { CONNECTION_STRING, SERVER_PORT } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/...build`));

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("db connection established");
  })
  .catch(err => console.log(err));

app.get("/api/house", cb.getHouses);
app.post("/api/house", cb.addHouse);
app.delete("/api/house/:id", cb.deleteHouse);

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
