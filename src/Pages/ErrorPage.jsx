import { Link } from "react-router-dom";
import errorImg from "../assets/404/404.gif";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100 px-4 text-center">
            {/* Error Image */}
            <img src={errorImg} alt="404 Error" className="w-80 md:w-96 mb-6 animate-bounce" />

            {/* Error Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-2">Oops!</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
                The page you are looking for does not exist.
            </p>

            {/* Back Home Button */}
            <Link
                to="/"
                className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-500 transition duration-300 font-semibold"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;
