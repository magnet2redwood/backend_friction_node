const userModel = require("./../model/user_model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function userSignUp(req, res) {
  userModel
    .findOne({ where: { Email: req.body.email } })
    .then((result) => {
      if (result) {
        res.status(409).json({
          [process.env.PROJECT_NAME]: {
            status: 409,
            timestamp: Date.now(),
            message: "User Already Exists",
          },
        });
      } else {
        bcrypt.genSalt(10, function (error, salt) {
          const user = {
            Email: req.body.email,
          };
          userModel
            .create(user)
            .then((result1) => {
              const token = jwt.sign(
                {
                  email: user.Email,
                },
                process.env.JWT_KEY,
                function (error, token) {
                  res.status(201).json({
                    [process.env.PROJECT_NAME]: {
                      status: 201,
                      timestamp: Date.now(),
                      token: token,
                      message: "User Created Successfully!",
                      error: error,
                      data: {
                        email: result1.Email,
                      },
                    },
                  });
                },
              );
            })
            .catch((error) => {
              res.status(500).json({
                [process.env.PROJECT_NAME]: {
                  status: 500,
                  timestamp: Date.now(),
                  message: "Something Went Wrong!",
                  data: error,
                },
              });
            });
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        [process.env.PROJECT_NAME]: {
          status: 500,
          timestamp: Date.now(),
          message: "Something Went Wrong!",
          data: error,
        },
      });
    });
}

function userLogin(req, res) {
  userModel
    .findOne({
      where: { Email: req.body.email },
    })
    .then((user) => {
      if (user === null) {
        res.status(404).json({
          [process.env.PROJECT_NAME]: {
            status: 404,
            timestamp: Date.now(),
            message: "User with this email not found!",
            data: {
              email: user.Email,
            },
          },
        });
      } else {
        const token = jwt.sign(
          {
            email: user.Email,
          },
          process.env.JWT_KEY,
          function (error, token) {
            res.status(200).json({
              [process.env.PROJECT_NAME]: {
                status: 200,
                timestamp: Date.now(),
                message: "User loggedIn successfuly",
                token: token,
                data: {
                  email: user.Email,
                },
              },
            });
          },
        );
      }
    })
    .catch((error) => {
      res.status(500).json({
        [process.env.PROJECT_NAME]: {
          status: 500,
          timestamp: Date.now(),
          message: "Something Went Wrong!",
          data: error,
        },
      });
    });
}

function updateProfile(req, res) {
  const userProfile = {
    FirstName: req.body.firstName,
    LastName: req.body.lastName,
    UserSource: req.body.userSource,
    Gender: req.body.gender,
    Mobile: req.body.mobile,
    PhotoURL: req.body.photoUrl,
    IsManager: req.body.isManager,
    IsActive: req.body.isActive
  };
  userModel
    .findOne({ where: { Email: req.body.email } })
    .then((user) => {
      if (user === null) {
        res.status(404).json({
          [process.env.PROJECT_NAME]: {
            status: 404,
            timestamp: Date.now(),
            message: "User with this email not found!",
            data: {
              email: user.email,
            },
          },
        });
      } else {
        userModel
          .update(userProfile, { where: { Email: user.Email } })
          .then((result) => {
            if (result) {
              res.status(200).json({
                [process.env.PROJECT_NAME]: {
                  status: 200,
                  timestamp: Date.now(),
                  message: "User profile updated successfully",
                  data: userProfile,
                },
              });
            } else {
              res.status(404).json({
                [process.env.PROJECT_NAME]: {
                  status: 404,
                  timestamp: Date.now(),
                  message: "User Profile not found",
                },
              });
            }
          })
          .catch((error) => {
            res.status(500).json({
              [process.env.PROJECT_NAME]: {
                status: 500,
                timestamp: Date.now(),
                message: "Something Went Wrong!",
                data: error,
              },
            });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({
        [process.env.PROJECT_NAME]: {
          status: 500,
          timestamp: Date.now(),
          message: "Something Went Wrong!",
          data: error,
        },
      });
    });
}

function getUserProfile(req, res) {
  userModel
    .findOne({
      where: { Email: req.body.email },
      attributes: { exclude: ["CreatedAt", "UpdatedAt"] },
    })
    .then((user) => {
      if (user === null) {
        res.status(404).json({
          [process.env.PROJECT_NAME]: {
            status: 404,
            timestamp: Date.now(),
            message: "User with this email not found!",
            data: {
              email: user.email,
            },
          },
        });
      } else {
        res.status(200).json({
          [process.env.PROJECT_NAME]: {
            status: 200,
            timestamp: Date.now(),
            message: "User profile fetched!",
            data: user,
          },
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        [process.env.PROJECT_NAME]: {
          status: 500,
          timestamp: Date.now(),
          message: "Something Went Wrong!",
          data: error,
        },
      });
    });
}

function getAllTheUsers(req, res) {
  userModel
    .findAll({
      where: {IsActive: true},
      attributes: { exclude: ["CreatedAt", "UpdatedAt"] }})
    .then((result) => {
      res.status(200).json({
        [process.env.PROJECT_NAME]: {
          status: 200,
          timestamp: Date.now(),
          message: "Getting All the Users!",
          data: result
        },
      });
    })
    .catch((error) => {
      res.status(500).json({
        [process.env.PROJECT_NAME]: {
          status: 500,
          timestamp: Date.now(),
          message: "Something Went Wrong!",
          data: error,
        },
      });
    });
}

module.exports = {
  userSignUp: userSignUp,
  userLogin: userLogin,
  updateProfile: updateProfile,
  getUserProfile: getUserProfile,
  getAllTheUsers: getAllTheUsers,
};
