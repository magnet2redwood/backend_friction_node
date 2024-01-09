const http = require("http");
const app = require("./app");
const sequelize = require("./utils/database_connection");
const port = process.env.PORT || 3000;
const server = http.createServer(app);

try {
  server.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
  checkDatabaseConnection();
} catch (error) {
  console.error(error);
}

async function checkDatabaseConnection() {
  try {
    await sequelize.sync({
      // alter: true,
    });
    console.log("Database Connection Successful");
  } catch (error) {
    console.error(error);
  }
}
