import { Link } from "react-router";
import errorGif from "../assets/404error.gif";

const Error = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black px-4">
      <img src={errorGif} alt="404 Error" className=" " />

      <Link
        to={"/"}
        className=" absolute bottom-30 mt-6 px-6 py-3 bg-[#f7ce3e] text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
