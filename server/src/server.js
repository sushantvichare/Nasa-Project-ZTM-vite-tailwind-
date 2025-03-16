// HTTP SERVER FILE
const http = require("http");

require("dotenv").config();

const app = require("./app");
const { mongoConnect } = require("./services/mongo");
const { loadPlanetsData } = require("./models/planets.model");
const { loadLaunchData } = require("./models/launches.model");

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData();

  // app.listen(port);
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
