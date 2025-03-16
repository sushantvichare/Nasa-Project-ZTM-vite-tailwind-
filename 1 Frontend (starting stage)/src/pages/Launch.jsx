import { useMemo } from "react";

const Launch = (props) => {
  const selectorBody = useMemo(() => {
    return props.planets?.map((planet) => (
      <option value={planet.kepler_name} key={planet.kepler_name}>
        {planet.kepler_name}
      </option>
    ));
  }, [props.planets]);

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex flex-col py-40 px-50 w-full justify-center">
      <div className="flex flex-col w-4xl self-center">
        <p className="text-xl text-white py-10">
          Schedule a mission launch for interstellar travel to one of the Kepler
          Exoplanets.
        </p>
        <p className="text-lg text-white py-1">
          Only confirmed planets matching the following criteria are available
          for the earliest scheduled missions:
        </p>
        <ul>
          <li className="text-lg text-white py-1">
            • Planetary radius &lt; 1.6 times Earth's radius
          </li>
          <li className="text-lg text-white py-1">
            • Effective stellar flux &gt; 0.36 times Earth's value and &lt; 1.11
            times Earth's value
          </li>
        </ul>
      </div>

      <form
        onSubmit={props.submitLaunch}
        style={{
          display: "inline-grid",
          gridTemplateColumns: "auto auto",
          gridGap: "10px 20px",
        }}
        className="flex w-2xl align-center text-lg text-white py-10 self-center "
      >
        <label htmlFor="launch-day">Launch Date</label>
        <input
          className="bg-blue-100 text-black"
          type="date"
          id="launch-day"
          name="launch-day"
          min={today}
          max="2040-12-31"
          defaultValue={today}
        />
        <label htmlFor="mission-name">Mission Name</label>
        <input
          className="bg-blue-100 text-black text-center"
          type="text"
          id="mission-name"
          name="mission-name"
        />
        <label htmlFor="rocket-name">Rocket Type</label>
        <input
          className="bg-blue-100 text-black text-center"
          type="text"
          id="rocket-name"
          name="rocket-name"
          defaultValue="Explorer IS1"
        />
        <label htmlFor="planets-selector">Destination Exoplanet</label>
        <select
          className="bg-blue-100 text-black text-center"
          id="planets-selector"
          name="planets-selector"
        >
          {selectorBody}
        </select>

        <button
          type="submit"
          disabled={props.isPendingLaunch}
          className="flex hover:cursor-pointer py-3 px-2 w-40 self-center outline-white bg-blue-400 mt-10 "
        >
          Launch Mission ✔
        </button>

        {props.isPendingLaunch}
      </form>
    </div>
  );
};

export default Launch;
