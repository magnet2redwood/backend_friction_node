const serviceTechModel = require("../model/service_tech_model");

function addServiceTech(req, res) {
  const serviceTech = {
    ServiceTechMail: req.body.serviceTechEmail,
    IsActive: req.body.isActive,
  };
  serviceTechModel
    .create(serviceTech)
    .then((result) => {
      if (result) {
        res.status(201).json({
          [process.env.PROJECT_NAME]: {
            status: 201,
            timestamp: Date.now(),
            message: "ServiceTech Created",
            data: result,
          },
        });
      } else {
        res.status(500).json({
          [process.env.PROJECT_NAME]: {
            status: 500,
            timestamp: Date.now(),
            message: "Unable to create ServiceTech",
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

function updateServiceTech(req, res) {
  const serviceTech = {
    ServiceTechEmail: req.body.serviceTechEmail,
    IsActive: req.body.isActive
  };
  serviceTechModel
    .findOne({ where: {ServiceTechId: req.body.serviceTechId}})
    .then((serviceTechResult) => {
      if (serviceTechResult === null) {
        res.status(404).json({
          [process.env.PROJECT_NAME]: {
            status: 404,
            timestamp: Date.now(),
            message: `Service Tech with ${req.body.serviceTechId} not found!`,
            data: serviceTechResult
          },
        });
      } else {
        serviceTechModel
          .update(serviceTech, {
            where: {ServiceTechId: req.body.serviceTechId},
          })
          .then((result) => {
            if (result) {
              res.status(200).json({
                [process.env.PROJECT_NAME]: {
                  status: 200,
                  timestamp: Date.now(),
                  message: "Service Tech Updated",
                  data: serviceTech,
                },
              });
            } else {
              res.status(500).json({
                [process.env.PROJECT_NAME]: {
                  status: 500,
                  timestamp: Date.now(),
                  message: "Unable to create ServiceTech",
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

function getAllServiceTechs(req, res) {
  serviceTechModel
    .findAll({
      where: {IsActive: true},
      attributes: { exclude: ["CreatedAt", "UpdatedAt", "IsActive"] },
    })
    .then((result) => {
      if (result) {
        res.status(200).json({
          [process.env.PROJECT_NAME]: {
            status: 200,
            timestamp: Date.now(),
            message: "Fetched All ServiceTech",
            data: result,
          },
        });
      } else {
        res.status(500).json({
          [process.env.PROJECT_NAME]: {
            status: 500,
            timestamp: Date.now(),
            message: "Unable to fetch ServiceTechs",
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

module.exports = {
  addServiceTech: addServiceTech,
  updateServiceTech: updateServiceTech,
  getAllServiceTechs: getAllServiceTechs,
};
