import { Link, NavLink } from "react-router-dom";

const Navbar2 = () => {

    return (
        <div className="navbar shadow-sm bg-[#ECEAE3]">
            <div className="flex-1" style={{ fontFamily: "Rancho, cursive" }}>
                <Link to='/'>
                    <a className="btn btn-ghost text-2xl font-semibold">Espresso</a>
                </Link>
            </div>
            <div className="flex gap-2">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-cyan-600 text-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className="font-semibold font-serif">
                            <Link to='/profile'>
                                <a className="justify-between">
                                    Users  Profile
                                    {/* <span className="badge ml-2">New</span> */}
                                </a>
                            </Link>
                        </li>
                        <li className="font-semibold font-serif">
                            <NavLink to='/signup'>
                                SignUp
                            </NavLink>
                        </li>
                        <li className="font-semibold font-serif">
                            <NavLink to='/login'>
                                LogIn
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;