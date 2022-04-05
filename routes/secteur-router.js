const route = require("express").Router();

const { secteurController } = require("../controller");

route.get("/", secteurController.getAll);
route.get("/:id", secteurController.get);
route.post("/",  secteurController.create);
route.patch("/:id", secteurController.update);
route.delete("/:id", secteurController.remove);

module.exports = route;
