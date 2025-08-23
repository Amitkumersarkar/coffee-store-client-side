import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FcViewDetails } from "react-icons/fc";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, photo, category, details, chef, taste, supplier, price, origin, stock } =
        coffee;

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
                            setCoffees((prevCoffees) =>
                                prevCoffees.filter((coffee) => coffee._id !== _id)
                            );

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success",
                                timer: 1500,
                                showConfirmButton: false,
                            });
                        }
                    });
            }
        });
    };

    return (
        <div className="max-w-sm w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden m-5">
            {/* Coffee Image */}
            <div className="relative w-full h-72">
                <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-[#D2B48C] text-[#331A15] px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    {category}
                </span>
            </div>

            {/* Coffee Info */}
            <div className="p-4 space-y-1">
                <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                <p className="text-gray-600 text-sm">👨‍🍳 <span className="font-bold text-cyan-600">Chef</span>: {chef}</p>
                <p className="text-gray-600 text-sm">🍵 <span className="font-bold text-cyan-600">Taste</span>: {taste}</p>
                <p className="text-gray-600 text-sm">🚚 <span className="font-bold text-cyan-600">Supplier</span>: {supplier}</p>

                {/* Extra fields */}
                {origin && <p className="text-gray-600 text-sm">🌍 <span className="font-bold text-cyan-600">Origin</span>: {origin}</p>}
                {stock !== undefined && <p className="text-gray-600 text-sm">📦 <span className="font-bold text-cyan-600">Stock</span>: {stock}</p>}
                <p className="text-gray-700 font-semibold text-lg">💲 {price ? price : "N/A"}</p>

                <div className="flex gap-2 items-start">
                    <FcViewDetails className="text-xl mt-0.5" />
                    <p className="text-gray-600 text-sm">
                        <span className="font-bold text-cyan-600">Details:</span> {details}
                    </p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-around items-center px-4 pb-5">
                <Link to={`updatedCoffee/${_id}`}>
                    <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors">
                        Modify
                    </button>
                </Link>

                <Link to={`/viewDetails/${_id}`}>
                    <button className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium transition-colors">
                        View
                    </button>
                </Link>

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
