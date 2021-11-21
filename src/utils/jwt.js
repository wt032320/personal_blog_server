const jwt = require('jsonwebtoken')
const privateKey = 'zhienyuxin'

exports.setToken = function (username, password) {
  return new Promise((resolve, reject) => {
      const token = jwt.sign({
          name: username,
          password: password
      }, privateKey, { expiresIn: '10h' });
      resolve(token);
  })
}

exports.verToken = function (token) {
  return new Promise((resolve, reject) => {
      jwt.verify(token, privateKey, (err, decoded) => {
          if (err) {
              reject(err)
          } else {
              resolve(decoded)
          }
      })
  })
}