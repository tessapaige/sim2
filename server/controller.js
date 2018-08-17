module.exports = {
  getHouses: (req, res) => {
    const db = req.app.get("db");
    db.getAllHouses().then(response => {
      res.status(200).send(response);
    });
  },
  addHouse: (req, res) => {
    const db = req.app.get("db");
    const { name, address, city, state, zipcode } = req.body;
    db.addNewHouse([name, address, city, state, zipcode]).then(response => {
      res.status(200).send(response);
    });
  },
  deleteHouse: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.deleteHouses([id]).then(response => {
      db.getAllHouses().then(response => {
        res.status(200).send(response);
      });
    });
  }
};
