var jwt = require('jsonwebtoken');
var config = require('./config');

function tokenAuth(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, config.SECRET, function (err, decoded) {
      if (err) {
        res.json({
          success: false,
          message: 'Failed to authenticate the token'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
}

module.exports = tokenAuth;