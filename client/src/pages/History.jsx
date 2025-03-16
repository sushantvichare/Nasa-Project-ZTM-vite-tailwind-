import { useMemo } from "react";

const History = (props) => {
  const tableBody = useMemo(() => {
    return props.launches
      ?.filter((launch) => !launch.upcoming)
      .map((launch) => {
        return (
          <tr key={String(launch.flightNumber)}>
            <td>
              <span style={{ color: launch.success ? "greenyellow" : "red" }}>
                █
              </span>
            </td>
            <td>{launch.flightNumber}</td>
            <td>{new Date(launch.launchDate).toDateString()}</td>
            <td>{launch.mission}</td>
            <td>{launch.rocket}</td>
            <td>{launch.customers?.join(", ")}</td>
          </tr>
        );
      });
  }, [props.launches]);

  return (
    <article id="history">
      <div className="flex flex-col py-40 px-50 w-full justify-center">
        <p className="text-xl text-white py-10 ml-10">
          History of mission launches including SpaceX launches starting from
          the year 2006.
        </p>

        <table style={{ tableLayout: "fixed" }} className="text-white">
          <thead>
            <tr>
              <th style={{ width: "2rem" }}></th>
              <th style={{ width: "3rem" }}>No.</th>
              <th style={{ width: "9rem" }}>Date</th>
              <th>Mission</th>
              <th style={{ width: "7rem" }}>Rocket</th>
              <th>Customers</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </div>
    </article>
  );
};

export default History;
