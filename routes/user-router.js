const router = require("express").Router();

const { userController } = require("../controller");

router.post("/Add-Chef", userController.add, userController.addChef);
router.post("/Add-Livreur", userController.add, userController.addLivreur);
router.get("/", userController.getAll);
router.get("/:id", userController.get);
router.patch("/:id", userController.update);
router.delete("/:id", userController.remove);

module.exports = router;
