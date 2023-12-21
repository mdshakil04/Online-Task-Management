
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-[#3CC78F]">
      <div className=" text-center lg:mt-60 p-24 ">
        <h2 className="text-6xl text-center text-white">
          404 <br /> Page Not Found
        </h2>
        <Link className=" btn btn-warning mt-12" to={"/"}>
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
