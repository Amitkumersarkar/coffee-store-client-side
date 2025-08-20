import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    const { _id, name, photo, category, details, chef, taste, supplier } = coffee;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5500/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success",
                            });
                        }
                    });
            }
        });
    };

    return (
        <div className="max-w-sm md:max-w-md lg:max-w-lg w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden m-5">
            {/* Coffee Image */}
            <div className="relative">
                <img
                    src={photo}
                    alt={name}
                    className="w-fit h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-[#D2B48C] text-[#331A15] px-3 py-1 rounded-full text-xs font-semibold">
                    {category}
                </span>
            </div>

            {/* Coffee Info */}
            <div>
                <h2 className="text-xl font-bold text-gray-800 mb-1">{name}</h2>
                <p className="text-gray-600 text-sm mb-1">👨‍🍳 Chef : {chef}</p>
                <p className="text-gray-600 text-sm mb-1">🍵 Taste : {taste}</p>
                <p className="text-gray-600 text-sm mb-1">🚚 Supplier : {supplier}</p>
                <p className="text-gray-600 text-sm pb-2"> <span className="font bold text-cyan-600">Details</span> : {details}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-around items-center px- pb-5">
                <Link to={`updatedCoffee/${_id}`}>
                    <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors">
                        Modify
                    </button>
                </Link>

                <button className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium transition-colors">
                    View
                </button>

                <button
                    onClick={() => handleDelete(_id)}
                    className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition-colors"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;
