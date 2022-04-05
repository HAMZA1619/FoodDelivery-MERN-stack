const authController = require("./auth-controller");
const userController = require("./user-controller");
const secteurController = require("./secteur-controller");
const mealController = require("./meal-controller");
const restaurantController = require("./restaurant-controller");
const categoryController = require("./category-controller");

module.exports = {
  categoryController,
  restaurantController,
  mealController,
  secteurController,
  authController,
  userController,
};
