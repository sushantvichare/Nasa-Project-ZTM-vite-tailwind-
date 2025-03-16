import { Link } from "react-router-dom";
import {
  RocketLaunchIcon,
  NewspaperIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <div className="fixed shadow-md  bg-black z-50 w-full py-2 flex items-center justify-around">
      <div className="flex items-center gap-2">
        <img
          src="/favicon.png"
          alt=""
          style={{
            margin: "15px 10px 15px 0",
            height: "50px",
            width: "auto",
          }}
        />
        <h1 className="text-white text-2xl"> Nasa Mission Control </h1>
      </div>

      <Link
        to="/launch"
        className="flex gap-2 text-white hover:text-blue-100 text-2xl "
      >
        <RocketLaunchIcon className="size-6 text-blue-500" />
        Launch
      </Link>
      <Link
        to="/upcoming"
        className="flex gap-2 text-white hover:text-blue-100 text-2xl"
      >
        <NewspaperIcon className="size-6 text-blue-500" />
        Upcoming
      </Link>
      <Link
        to="/history"
        className="flex gap-2 text-white hover:text-blue-100 text-2xl"
      >
        <ClockIcon className="size-6 text-blue-500" />
        History
      </Link>
    </div>
  );
}

export default Navbar;
