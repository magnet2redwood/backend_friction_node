const activityModel = require("./../model/activity_model");

function addActivity(req, res) {
  const activity = {
    EstimatedWorkStartDate: req.body.estimatedWorkStartDate,
    EstimatedWorkEndDate: req.body.estimatedWorkEndDate,
    ActualWorkStartDate: req.body.actualWorkStartDate,
    ActualWorkEndDate: req.body.actualWorkEndDate,
    IsAmended: req.body.isAmended,
    ActualWorkStartLAT: req.body.actualWorkStartLat,
    ActualWorkStartLONG: req.body.actualWorkStartLong,
    ActualWorkEndLAT: req.body.actualEndWorkLat,
    ActualWorkEndLONG: req.body.actualWorkEndLong,
    TruckId: req.body.truckId,
    MileageStart: req.body.mileageStart,
    MileageEnd: req.body.mileageEnd,
    SeriviceTechId: req.body.seriviceTechId,
    RailUnitLocationId: req.body.railUnitLocationId,
    ActivityTypeId: req.body.activityTypeId,
    ActivityStatusId: req.body.activityStatusId,
    CreatedBy: req.body.createdById,
  };
  activityModel
    .create(activity)
    .then((result) => {
      if (result) {
        res.status(201).json({
          [process.env.PROJECT_NAME]: {
            status: 201,
            timestamp: Date.now(),
            message: "Activity Created",
            data: result,
          },
        });
      } else {
        res.status(500).json({
          [process.env.PROJECT_NAME]: {
            status: 500,
            timestamp: Date.now(),
            message: "Unable to Create Activity",
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
