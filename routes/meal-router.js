const route = require("express").Router();

const { mealController } = require("../controller");
const { upload, isAuth, is } = require("../middleware");

route.get("/", mealController.getAll);
route.get("/:id", mealController.get);
route.post("/",  upload.single("image"),mealController.create);
route.patch("/:id", mealController.update);
route.delete("/:id", mealController.remove);

module.exports = route;
