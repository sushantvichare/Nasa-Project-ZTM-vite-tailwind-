const {
  getAllLaunches,

  scheduleNewLaunch, // schedule
  existsLaunchWithId,
  abortLaunchById,
} = require("../../models/launches.model");

const { getPagination } = require("../../services/query");

async function httpGetAllLaunches(req, res) {
  const { skip, limit } = getPagination(req.query);
  const launches = await getAllLaunches(skip, limit);
  return res.status(200).json(launches);
}

async function httpAddNewLaunch(req, res) {
  const launch = req.body;

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing required launch property",
    });
  }

  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid Date",
    });
  } else {
    await scheduleNewLaunch(launch);
    return res.status(201).json(launch);
  }
}

async function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);

  const existsLaunch = await existsLaunchWithId(launchId);

  if (!existsLaunch) {
    return res.status(404).json({
      error: "Launch not found",
    });
  }
  const aborted = await abortLaunchById(launchId);
  if (!aborted) {
    return res.status(400).json({
      error: "Failed to abort launch",
    }); // Return a 500 status code for server errors. 5xx status codes indicate server-side errors. 4xx status codes indicate client-side errors. 2xx status codes indicate successful requests. 3xx status codes indicate redirection. 4xx status codes indicate client-side errors, 5xx status codes indicate server-side errors. 200 OK indicates a successful response. 400 Bad Request indicates a client-side error. 401 Unauthorized indicates an unauthorized request. 403 Forbidden indicates a request that is forbidden. 404 Not Found indicates that the requested resource was not found. 500 Internal Server Error indicates that the server encountered an unexpected error.
  }
  return res.status(200).json({
    ok: true,
  });
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch };
