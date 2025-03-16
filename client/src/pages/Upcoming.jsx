import { useMemo } from "react";

const Upcoming = (props) => {
  const { launches, abortLaunch } = props;

  const tableBody = useMemo(() => {
    return launches
      ?.filter((launch) => launch.upcoming)
      .map((launch) => {
        return (
          <tr key={String(launch.flightNumber)}>
            <td>
              <button
                className="hover:cursor-pointer"
                onClick={() => abortLaunch(launch.flightNumber)}
              >
                ✖
              </button>
            </td>
            <td>{launch.flightNumber}</td>
            <td>{new Date(launch.launchDate).toDateString()}</td>
            <td>{launch.mission}</td>
            <td>{launch.rocket}</td>
            <td>{launch.target}</td>
          </tr>
        );
      });
  }, [launches, abortLaunch]);

  return (
    <div
      id="upcoming"
      className="flex flex-col py-40 px-50 w-full justify-center"
    >
      <p className="text-xl text-white py-1 ml-10">
        Upcoming missions including both SpaceX launches and newly scheduled
        Zero to Mastery rockets.
      </p>
      <p className="text-xl text-white ml-10">
        Warning! Clicking on the ✖ aborts the mission.
      </p>

      <table style={{ tableLayout: "fixed" }} className="text-white mt-5">
        <thead>
          <tr>
            <th style={{ width: "3rem" }}></th>
            <th style={{ width: "3rem" }}>No.</th>
            <th style={{ width: "10rem" }}>Date</th>
            <th style={{ width: "11rem" }}>Mission</th>
            <th style={{ width: "11rem" }}>Rocket</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};

export default Upcoming;
