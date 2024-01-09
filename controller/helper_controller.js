const helperModel = require("../model/helper_model");

function addHelper(req, res) {
  const helper = {
    EstimatedWorkStartDate: req.body.estimatedWorkStartDate,
    EstimatedWorkEndDate: req.body.estimatedWorkEndDate,
    ActualWorkStartDate: req.body.actualWorkStartDate,
    ActualWorkEndDate: req.body.actualWorkEndDate,
    IsActive: req.body.isActive
  };
  helperModel
    .create(helper)
    .then((result) => {
      if (result) {
        res.status(201).json({
          [process.env.PROJECT_NAME]: {
            status: 201,
            timestamp: Date.now(),
            message: "Helper Created",
            data: result,
          },
        });
      } else {
        res.status(500).json({
          [process.env.PROJECT_NAME]: {
            status: 500,
            timestamp: Date.now(),
            message: "Unable to create Helper",
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

function updateHelper(req, res) {
  const helper = {
    EstimatedWorkStartDate: req.body.estimatedWorkStartDate,
    EstimatedWorkEndDate: req.body.estimatedWorkEndDate,
    ActualWorkStartDate: req.body.actualWorkStartDate,
    ActualWorkEndDate: req.body.actualWorkEndDate,
    IsActive: req.body.isActive
  };
  helperModel
    .findOne({ where: { HelperId: req.body.helperId } })
    .then((helperResult) => {
      if (helperResult === null) {
        res.status(404).json({
          [process.env.PROJECT_NAME]: {
            status: 404,
            timestamp: Date.now(),
            message: `Helper with ${req.body.helperId} not found!`,
          },
        });
      } else {
        helperModel
          .update(helper, { where: { HelperId: req.body.helperId } })
          .then((result) => {
            if (result) {
              res.status(200).json({
                [process.env.PROJECT_NAME]: {
                  status: 200,
                  timestamp: Date.now(),
                  message: "Helper Updated",
                  data: helper
                },
              });
            } else {
              res.status(500).json({
                [process.env.PROJECT_NAME]: {
                  status: 500,
                  timestamp: Date.now(),
                  message: "Unable to update the Helper",
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
                data: error
              },
            });
          });
      }
    });
}

function getAllHelpers(req, res) {
  helperModel
    .findAll({
      where: {IsActive: true},
      attributes: {exclude:["CreatedAt", "UpdatedAt", "IsActive"]},
    })
    .then((result) => {
      if (result) {
        res.status(200).json({
          [process.env.PROJECT_NAME]: {
            status: 200,
            timestamp: Date.now(),
            message: "Fetched All Helper",
            data: result
          },
        });
      } else {
        res.status(500).json({
          [process.env.PROJECT_NAME]: {
            status: 500,
            timestamp: Date.now(),
            message: "Unable to fetch Helpers",
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
          data: error
        },
      });
    });
}

module.exports = {
  addHelper: addHelper,
  updateHelper: updateHelper,
  getAllHelpers: getAllHelpers,
};
