const express = require("express");

const {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch, // remove
} = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddNewLaunch);
launchesRouter.delete("/:id", httpAbortLaunch); // remove

module.exports = launchesRouter;
