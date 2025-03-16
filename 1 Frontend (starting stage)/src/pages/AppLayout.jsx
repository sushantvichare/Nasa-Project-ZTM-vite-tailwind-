import { Routes, Route } from "react-router";

import usePlanets from "../hooks/usePlanets";
import useLaunches from "../hooks/useLaunches";

import Navbar from "../components/Navbar";

import Launch from "./Launch";
import History from "./History";
import Upcoming from "./Upcoming";

function AppLayout() {
  const planets = usePlanets();

  const { launches, isPendingLaunch, submitLaunch, abortLaunch } =
    useLaunches();

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Launch
                planets={planets}
                submitLaunch={submitLaunch}
                isPendingLaunch={isPendingLaunch}
              />
            }
          />

          <Route
            exact
            path="/launch"
            element={
              <Launch
                planets={planets}
                submitLaunch={submitLaunch}
                isPendingLaunch={isPendingLaunch}
              />
            }
          />

          <Route
            exact
            path="/upcoming"
            element={<Upcoming launches={launches} abortLaunch={abortLaunch} />}
          />

          <Route
            exact
            path="/history"
            element={<History launches={launches} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default AppLayout;
