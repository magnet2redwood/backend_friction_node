const activityStatusModel = require("../model/activity_status_model");

function addActivityStatus(req, res) {
  const activityStatus = {
    Name: req.body.name,
    IsActive: req.body.isActive
  };
  activityStatusModel
    .create(activityStatus)
    .then((result) => {
      if (result) {
        res.status(201).json({
          [process.env.PROJECT_NAME]: {
            status: 201,
            timestamp: Date.now(),
            message: "Activity Status Created",
            data: result,
          },
        });
      } else {
        res.status(500).json({
          [process.env.PROJECT_NAME]: {
            status: 500,
            timestamp: Date.now(),
            message: "Unable to create Activity Status",
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

function updateActivityStatus(req, res) {
  const activityStatus = {
    Name: req.body.name,
    IsActive: req.body.isActive
  };
  activityStatusModel
    .findOne({ where: { ActivityStatusId: req.body.activityStatusId } })
    .then((activityStatusResult) => {
      if (activityStatusResult === null) {
        res.status(404).json({
          [process.env.PROJECT_NAME]: {
            status: 404,
            timestamp: Date.now(),
            message: `Activity status with ${req.body.activityStatusId} not found!`,
          },
        });
      } else {
        activityStatusModel
          .update(activityStatus, { where: { ActivityStatusId: req.body.activityStatusId } })
          .then((result) => {
            if (result) {
              res.status(200).json({
                [process.env.PROJECT_NAME]: {
                  status: 200,
                  timestamp: Date.now(),
                  message: "Activity Status Updated",
                  data: result
                },
              });
            } else {
              res.status(500).json({
                [process.env.PROJECT_NAME]: {
                  status: 500,
                  timestamp: Date.now(),
                  message: "Unable to update the ActivityStatus",
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

function getAllActivityStatuss(req, res) {
  activityStatusModel
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
            message: "Fetched All Activity Status",
            data: result
          },
        });
      } else {
        res.status(500).json({
          [process.env.PROJECT_NAME]: {
            status: 500,
            timestamp: Date.now(),
            message: "Unable to fetch Activity Statuss",
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
  addActivityStatus: addActivityStatus,
  updateActivityStatus: updateActivityStatus,
  getAllActivityStatuss: getAllActivityStatuss,
};
