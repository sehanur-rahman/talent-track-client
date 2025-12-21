import { Link } from "react-router-dom";
import errorImg from "../../assets/error.png";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FEF9E7] px-4">
      <div className="max-w-3xl w-full grid md:grid-cols-2 gap-8 items-center">

        {/* Error Image */}
        <div className="flex justify-center">
          <img
            src={errorImg}
            alt="404 Not Found"
            className="max-h-80 object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-6xl font-extrabold text-primary">404</h1>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Page Not Found
          </h2>

          <p className="text-gray-600">
            Sorry, the page you're looking for doesn't exist or may have been
            moved. Let's get you back on track.
          </p>

          {/* Actions */}
          <div className="flex justify-center md:justify-start">
            <Link to="/" className="btn btn-primary">
              Go Home
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NotFound;
