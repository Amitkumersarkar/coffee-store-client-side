
const LogIn = () => {

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-serif text-cyan-500 font-bold">Login now!</h1>
                    <p className="py-6 font-serif text-gray-500">
                        Access your personalized dashboard, track your orders, <br /> and manage your gadget preferences all in one place.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label text-cyan-500 font-semibold">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label text-cyan-500 font-semibold">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-primary mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;