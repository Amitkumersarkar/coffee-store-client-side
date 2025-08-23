import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";

const SignUp = () => {
    const { createUser } = useContext(authContext);

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log("Sign Up Data:", { name, userName, email, password });

        createUser(email, password)
            .then((result) => {
                console.log("User created successfully:", result.user);
                form.reset(); // clear form after success
            })
            .catch((error) => {
                console.error("Error creating user:", error.message);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-serif text-blue-600 font-bold">
                        Sign Up Now
                    </h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label text-cyan-500 font-semibold">
                                    Full Name
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    className="input"
                                    placeholder="Enter Your Full Name"
                                    required
                                />

                                <label className="label text-cyan-500 font-semibold">
                                    User Name
                                </label>
                                <input
                                    name="userName"
                                    type="text"
                                    className="input"
                                    placeholder="Enter Your User Name"
                                    required
                                />

                                <label className="label text-cyan-500 font-semibold">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="Enter Your Email"
                                    required
                                />

                                <label className="label text-cyan-500 font-semibold">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    className="input"
                                    placeholder="Enter Your Password"
                                    required
                                />

                                <div>
                                    <a className="link link-hover">Forgot password?</a>
                                </div>
                                <button className="btn btn-primary font-semibold font-serif mt-4">
                                    Sign Up
                                </button>
                            </fieldset>
                            <p className="text-center pt-2">
                                Already have an account?{" "}
                                <Link to="/login">
                                    <span className="font-semibold font-serif text-green-600">
                                        Login
                                    </span>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
