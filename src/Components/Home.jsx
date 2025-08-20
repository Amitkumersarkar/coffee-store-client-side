import { NavLink, useLoaderData } from "react-router-dom";
import CoffeeCard from "../Pages/CoffeeCard";
import { useState } from "react";

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
                        "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Discover our premium coffees. Add, modify, or remove any coffee instantly!
                        </p>
                        <NavLink to="/addCoffee">
                            <button className="btn btn-primary">Get Started</button>
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Coffee Cards Section */}
            <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                {coffees.map((coffee) => (
                    <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    />
                ))}
            </div>
        </>
    );
};

export default Home;
