const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const config = require('../config');

const UserController = {
  create: (req, res, next) => {
    const { name, email, password } = req.body;

    User.findOne({
      email: email
    }, (err, user) => {
      if (err) throw err;

      if (user) {
        res.status(200).send({
          message: 'Choose a different email, this one is taken.',
          success: false
        });
      } else {
        if (!password) {
          return;
        }

        const user = new User({ name, email, password });
        console.log(user)
        
        user.save().then((err, user) => {
          res.json({
            success: true,
            status: 200,
            message: 'User has been saved successfully'
          });
        });
      }
    });
  },

  authenticate: (req, res, next) => {
    const { email, password } = req.body;

    User.findOne({
      email
    }, (err, user) => {
      if (err) throw err;

      if (!user) {
        res.status(400).send({
          status: 400,
          message: 'Authentication failed. User not found.'
        });
      } else if (user) {
        user.comparePassword(password, (err, isMatch) => {
          if (!isMatch) {
            res.status(400).send({
              status: 400,
              message: 'Authentication. Wrong password.'
            });
          } else {
            const token = jwt.sign(user, config.SECRET, { expiresIn: 3600 });

            res.json({
              success: true,
              message: 'Enjoy your token!',
              user: {
                name: user.name,
                email: user.email
              },
              token: token
            });
          }
        });
      }
    });
  }
};

module.exports = UserController;