const express = require("express");
const db = require("./database");
const mongoose = require("mongoose");

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();

    this.express.listen(3000, () =>
      console.log(`API REST running on port 2202 with MongoDB`)
    );
  }

  async database() {
    await mongoose.connect(db.uri, { useNewUrlParser: true });
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
