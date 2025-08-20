import { FaArrowLeft } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const newCoffee = {
            name: form.name.value,
            supplier: form.supplier.value,
            category: form.category.value,
            photo: form.photo.value,
            chef: form.chef.value,
            taste: form.taste.value,
            quantity: form.quantity.value,
            details: form.details.value,
        };

        console.log(newCoffee);

        // send client side data into server side
        fetch("http://localhost:5500/coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newCoffee),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Coffee Added Successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                    form.reset(); // ✅ reset form after success
                }
            });
    };

    return (
        <div className=" bg-[#FDF9F4] min-h-screen flex flex-col items-center p-5">
            {/* Back Button */}
            <NavLink to="/">
                <button
                    className="btn btn-ghost text-xl bg-transparent text-cyan-600 mb-8 flex items-center gap-2"
                    style={{ fontFamily: "Rancho, cursive" }}
                >
                    <FaArrowLeft /> Back To Home
                </button>
            </NavLink>

            {/* Heading & Description */}
            <div className="text-center max-w-2xl mb-10">
                <h1
                    className="text-4xl text-[#374151] font-semibold mb-4"
                    style={{ fontFamily: "Rancho, cursive" }}
                >
                    Add New Coffee
                </h1>
                <p className=" text-[#1B1A1AB2]">
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters, as opposed to using
                    Content here.
                </p>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="label text-cyan-500 font-semibold">Coffee Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter coffee name"
                                className="input input-bordered bg-gray-200 text-black w-full"
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Supplier</label>
                            <input
                                name="supplier"
                                type="text"
                                placeholder="Enter coffee supplier"
                                className="input input-bordered bg-gray-200 text-black w-full"
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Category</label>
                            <input
                                name="category"
                                type="text"
                                placeholder="Enter coffee category"
                                className="input input-bordered bg-gray-200 text-black w-full"
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Photo</label>
                            <input
                                name="photo"
                                type="text"
                                placeholder="Enter photo URL"
                                className="input input-bordered bg-gray-200 text-black w-full"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="label text-cyan-500 font-semibold">Chef</label>
                            <input
                                name="chef"
                                type="text"
                                placeholder="Enter coffee chef"
                                className="input input-bordered bg-gray-200 text-black w-full"
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Taste</label>
                            <input
                                name="taste"
                                type="text"
                                placeholder="Enter coffee taste"
                                className="input input-bordered bg-gray-200 text-black w-full"
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Quantity</label>
                            <input
                                name="quantity"
                                type="text"
                                placeholder="Enter coffee quantity"
                                className="input input-bordered bg-gray-200 text-black w-full"
                            />
                        </div>

                        <div>
                            <label className="label text-cyan-500 font-semibold">Details</label>
                            <input
                                name="details"
                                type="text"
                                placeholder="Enter coffee details"
                                className="input input-bordered bg-gray-200 text-black w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-6 w-full py-3 bg-[#D2B48C] text-[#331A15] text-xl font-semibold rounded-md hover:bg-[#c9a77b] transition-colors"
                    style={{ fontFamily: "Rancho, cursive" }}
                >
                    Add Coffee
                </button>
            </form>
        </div>
    );
};

export default AddCoffee;
