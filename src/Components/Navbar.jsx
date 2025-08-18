import bgImg from "../assets/more/15.jpg";
import logo1 from "../assets/more/logo1.png";

const Navbar = () => {
    return (
        <div
            className="w-full h-[100px] py-3 text-white bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className="max-w-7xl mx-auto flex justify-center items-center gap-3">
                <img src={logo1} alt="logo1" className="w-18 h-18 object-contain" />
                <h1 style={{ fontFamily: "Rancho, cursive" }} className="text-5xl">
                    Espresso Emporium
                </h1>
            </div>
        </div>
    );
};

export default Navbar;
