const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  if(!req.cookies['access'])
    return res.send(403)
    
  const decodedUser = jwt.verify(req.cookies['access'], process.env.SECRET)
  
  if (!decodedUser.id) {
    next({
      status: 422,
      message: `Failed! UR Not Authenticated`
    })
  }
  req.user = decodedUser
  next()
}