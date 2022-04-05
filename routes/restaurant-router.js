const route = require("express").Router();

const { restaurantController } = require("../controller");
const { upload, isAuth, is } = require("../middleware");

route.get("/", restaurantController.getAll);
route.get("/:id", restaurantController.get);
route.post("/", upload.single("image"), restaurantController.create);
route.patch("/:id", restaurantController.update);
route.delete("/:id", restaurantController.remove);

module.exports = route;