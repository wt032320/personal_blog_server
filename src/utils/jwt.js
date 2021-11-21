const jwt = require('jsonwebtoken')
const privateKey = 'zhienyuxin'

module.exports.setToken = function (username, password) {
  const token = jwt.sign({
    name: username,
    _id: password
  }, privateKey, { expiresIn: '10h' });
  return token 
}

module.exports.varToken = function (token) {
  jwt.verify(token, privateKey, (err, decoded) => {
    if (err) {
      return { err }
    } else if (decoded) {
      return { decoded }
    }
  })
}