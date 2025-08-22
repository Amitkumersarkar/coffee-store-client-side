import { Link } from "react-router-dom";

const SignUp = () => {

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-serif text-blue-600 font-bold">Sign Up Now</h1>
                    {/* <p className="py-6 font-serif text-gray-500">
                        Access your personalized dashboard, track your orders, <br /> and manage your coffee preferences all in one place.
                    </p> */}
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label text-cyan-500 font-semibold">Full Name</label>
                                <input name='name' type="text" className="input" placeholder="Enter Your Full Name" />
                                <label className="label text-cyan-500 font-semibold">User Name</label>
                                <input name='userName' type="text" className="input" placeholder="Enter Your User Name" />
                                <label className="label text-cyan-500 font-semibold">Email</label>
                                <input name='email' type="email" className="input" placeholder="Enter Your Email" />
                                <label className="label text-cyan-500 font-semibold">Password</label>
                                <input name="password" type="password" className="input" placeholder="Enter Your Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-primary font-semibold font-serif mt-4">SignUp</button>
                            </fieldset>
                            <p className="text-center pt-2">All ready have an accounts ? <Link to='/login'><span className="font-semibold font-serif text-green-600">Login</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;