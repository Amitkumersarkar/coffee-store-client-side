import { useLoaderData, Link } from "react-router-dom";

const ViewDetails = () => {
    const coffee = useLoaderData();
    const { name, photo, category, details, chef, taste, supplier, price, origin, stock } = coffee;

    return (
        <div className="flex justify-center items-center py-10 px-5 bg-gradient-to-br from-[#fefaf5] to-[#f4e3d7] min-h-screen">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                {/* Coffee Image */}
                <div className="md:w-1/2 w-full">
                    <img
                        src={photo}
                        alt={name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Coffee Info */}
                <div className="p-8 md:w-1/2 w-full space-y-4">
                    <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
                    <p className="text-sm text-gray-500 italic">Category: {category}</p>

                    <p className="text-lg font-semibold text-green-600">💲 Price: {price ? price : "N/A"}</p>

                    <div className="space-y-2 text-gray-700">
                        <p><span className="font-semibold text-cyan-700">👨‍🍳 Chef:</span> {chef}</p>
                        <p><span className="font-semibold text-cyan-700">🍵 Taste:</span> {taste}</p>
                        <p><span className="font-semibold text-cyan-700">🚚 Supplier:</span> {supplier}</p>
                        {origin && <p><span className="font-semibold text-cyan-700">🌍 Origin:</span> {origin}</p>}
                        {stock !== undefined && <p><span className="font-semibold text-cyan-700">📦 Stock:</span> {stock}</p>}
                    </div>

                    <div className="pt-4">
                        <h2 className="text-lg font-semibold text-cyan-700 flex items-center">
                            📖 Details
                        </h2>
                        <p className="text-gray-600 mt-1">{details}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-6">
                        <Link to="/">
                            <button className="px-5 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium transition-colors">
                                ⬅ Back
                            </button>
                        </Link>
                        <Link to={`/updatedCoffee/${coffee._id}`}>
                            <button className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors">
                                ✏ Modify
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
