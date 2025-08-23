import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";

const SignUp = () => {
    const { createUser } = useContext(authContext);
    const navigate = useNavigate(); // for redirecting
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);

        const form = e.target;
        const name = form.name.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const newUser = { name, userName, email };
                form.reset();

                fetch("http://localhost:5500/users", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("User created in DB:", data);
                        setMessage("Account created successfully! 🎉 Redirecting to login...");

                        // Redirect to login after 2 seconds
                        setTimeout(() => navigate("/login"), 2000);
                    })
                    .catch((err) => {
                        console.error("Error saving user to DB:", err);
                        setMessage("User created in auth but failed to save in DB.");
                    });
            })
            .catch((error) => {
                console.error("Error creating user:", error.message);
                setMessage(`Error: ${error.message}`);
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-cyan-100">
            <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl p-6">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold font-serif text-blue-600">
                        Sign Up
                    </h1>
                    <p className="mt-2 text-gray-500 font-serif text-sm">
                        Create your account to start your coffee journey ☕
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSignUp} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">Full Name</label>
                        <input name="name" type="text" placeholder="Enter Your Full Name" className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400" required />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">User Name</label>
                        <input name="userName" type="text" placeholder="Enter Your User Name" className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400" required />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">Email</label>
                        <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400" required />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-semibold text-cyan-600">Password</label>
                        <input name="password" type="password" placeholder="Enter Your Password" className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-cyan-400" required />
                    </div>

                    <button className="w-full btn bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md font-serif" disabled={loading}>
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>

                {/* Message */}
                {message && (
                    <p className="mt-4 text-center text-sm font-semibold text-red-600">
                        {message}
                    </p>
                )}

                {/* Footer */}
                <p className="text-center mt-4 text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-700 font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
