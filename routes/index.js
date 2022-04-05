const authRouter = require('./auth-router')
const userRouter = require('./user-router')
const secteurRouter = require('./secteur-router')
const mealRouter = require('./meal-router')
const categoryRouter = require('./category-router')

module.exports = {
  categoryRouter,
  mealRouter,
  secteurRouter,
  userRouter,
  authRouter
}