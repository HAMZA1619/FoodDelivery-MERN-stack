const route = require("express").Router();

const { categoryController } = require("../controller");

route.get("/", categoryController.getAll);
route.get("/:id", categoryController.get);
route.post("/",  categoryController.create);
route.patch("/:id", categoryController.update);
route.delete("/:id", categoryController.remove);

module.exports = route;