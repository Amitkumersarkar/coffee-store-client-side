import { Link } from "react-router-dom";
import { Coffee } from "lucide-react"; // nice coffee icon

const LogIn = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-cyan-100">
            <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl p-6">
                {/* Header */}
                <div className="text-center mb-6">
                    <div className="flex justify-center items-center gap-2">
                        <Coffee className="w-8 h-8 text-cyan-600" />
                        <h1 className="text-4xl font-bold font-serif text-cyan-600">
                            Login
                        </h1>
                    </div>
                    <p className="mt-3 text-gray-500 font-serif text-sm">
                        Access your dashboard, track your orders, and enjoy your coffee journey ☕
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>

                    <div className="flex justify-between text-sm">
                        <a className="text-cyan-600 hover:underline cursor-pointer">
                            Forgot password?
                        </a>
                    </div>

                    <button className="w-full btn bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl shadow-md font-serif">
                        Log In
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center mt-4 text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-cyan-700 font-semibold hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LogIn;
