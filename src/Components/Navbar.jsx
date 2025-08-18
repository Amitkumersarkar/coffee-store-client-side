import navImg from "../assets/more/15.jpg"
const Navbar = () => {
    return (
        <>
            <div className="navbar bg-primary text-primary-content">
                <img src={navImg} alt="" />
                <button className="btn btn-ghost text-xl">daisyUI</button>
            </div>
        </>
    );
};

export default Navbar;