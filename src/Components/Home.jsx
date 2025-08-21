import { Link, NavLink, useLoaderData } from "react-router-dom";
import CoffeeCard from "../Pages/CoffeeCard";
import { useState } from "react";
import icons1 from "../assets/icons/1.png"
import icons2 from "../assets/icons/2.png"
import icons3 from "../assets/icons/3.png"
import icons4 from "../assets/icons/4.png"
import cup1 from "../assets/cups/Rectangle 10.png"
import cup2 from "../assets/cups/Rectangle 12.png"
import cup3 from "../assets/cups/Rectangle 13.png"
import cup4 from "../assets/cups/Rectangle 14.png"
import cup5 from "../assets/cups/Rectangle 16.png"
import cup6 from "../assets/cups/Rectangle 11.png"
import cup7 from "../assets/cups/Rectangle 15.png"
import cup8 from "../assets/cups/Rectangle 9.png"
const Home = () => {
    const coffeeLoaded = useLoaderData();
    const [coffees, setCoffees] = useState(coffeeLoaded);

    return (
        <>
            {/* Hero Section */}
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/GvGWqmcR/3.png)",
                }}
            >
                <div className="hero-content text-neutral-content text-center ml-52" >
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-semibold" style={{
                            fontFamily: "Rancho, cursive"
                        }}>Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5 text-gray-300 font-sans">
                            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable And
                            Discover our premium coffees.
                        </p>
                        <NavLink to="/addCoffee">
                            <button className="btn text-xl  bg-[#E3B577]" style={{ fontFamily: "Rancho, cursive" }}>Learn More</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            {/* Features Section */}
            <div className="bg-[#ECEAE3] py-12">
                <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

                    {/* Feature 1 */}
                    <div className="flex flex-col items-center">
                        <img src={icons1} alt="Awesome Aroma" className="w-16 h-16 mb-4" />
                        <h2 className="text-2xl text-[#331A15] mb-2" style={{ fontFamily: "Rancho, cursive" }}>
                            Awesome Aroma
                        </h2>
                        <p className="text-sm text-[#1B1A1A] max-w-xs">
                            You will definitely be a fan of the design & aroma of your coffee
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center">
                        <img src={icons2} alt="High Quality" className="w-16 h-16 mb-4" />
                        <h2 className="text-2xl text-[#331A15] mb-2" style={{ fontFamily: "Rancho, cursive" }}>
                            High Quality
                        </h2>
                        <p className="text-sm text-[#1B1A1A] max-w-xs">
                            Experience the rich taste and premium quality in every sip
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center">
                        <img src={icons3} alt="Pure Grades" className="w-16 h-16 mb-4" />
                        <h2 className="text-2xl text-[#331A15] mb-2" style={{ fontFamily: "Rancho, cursive" }}>
                            Pure Grades
                        </h2>
                        <p className="text-sm text-[#1B1A1A] max-w-xs">
                            Only the finest, handpicked coffee beans for you
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col items-center">
                        <img src={icons4} alt="Proper Roasting" className="w-16 h-16 mb-4" />
                        <h2 className="text-2xl text-[#331A15] mb-2" style={{ fontFamily: "Rancho, cursive" }}>
                            Proper Roasting
                        </h2>
                        <p className="text-sm text-[#1B1A1A] max-w-xs">
                            Expertly roasted to bring out the best flavors
                        </p>
                    </div>

                </div>
            </div>
            {/* card features */}
            <div className="text-center mt-10 ">
                <p className="text-xl">--- Sip & Savor ---</p>
                <h2 className="text-2xl font-semibold" style={{ fontFamily: "Rancho, cursive" }}>Our Popular Products</h2>
                <div className="p-2" style={{ fontFamily: "Rancho, cursive" }}>
                    <Link to='/addCoffee'>
                        <button className="btn bg-[#E3B577]">Add Coffee</button>
                    </Link>
                </div>
            </div>
            {/* Coffee Cards Section */}
            <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 ">
                {coffees.map((coffee) => (
                    <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    />
                ))}
            </div>
            {/* Follow Now Sections */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold text-[#331A15]" style={{ fontFamily: "Rancho, cursive" }}>Follow on Instagram</h2>
                <p className="text-sm text-[#1B1A1A]">For More Details Follow Us Now</p>
            </div>
            <div className="mt-5">

                <div className="bg-[#ECEAE3] py-12">
                    <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center">

                        {/* Feature 1 */}
                        <div className="flex flex-col items-center">
                            <img src={cup1} alt="Awesome Aroma" className="w-fit h-60 mb-4" />

                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col items-center">
                            <img src={cup2} alt="High Quality" className="w-fit h-60 mb-4" />

                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col items-center">
                            <img src={cup3} alt="Pure Grades" className="w-fit h-60 mb-4" />

                        </div>

                        {/* Feature 4 */}
                        <div className="flex flex-col items-center">
                            <img src={cup4} alt="Proper Roasting" className="w-fit h-60 mb-4" />

                        </div>
                        {/* Feature 5 */}
                        <div className="flex flex-col items-center">
                            <img src={cup5} alt="Proper Roasting" className="w-fit h-60 mb-4" />

                        </div>
                        {/* Feature 6 */}
                        <div className="flex flex-col items-center">
                            <img src={cup6} alt="Proper Roasting" className="w-fit h-60 mb-4" />

                        </div>
                        {/* Feature 7*/}
                        <div className="flex flex-col items-center">
                            <img src={cup7} alt="Proper Roasting" className="w-fit h-60 mb-4" />

                        </div>
                        {/* Feature 8 */}
                        <div className="flex flex-col items-center">
                            <img src={cup8} alt="Proper Roasting" className="w-fit h-60 mb-4" />

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
