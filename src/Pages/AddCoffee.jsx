import { FaArrowLeft } from "react-icons/fa6";
const AddCoffee = () => {
    return (
        <div className="bg-[#F4F3F0]">
            <button className="btn btn-ghost bg-transparent text-xl text-cyan-600 ml-5 mt-5 text-center" style={{ fontFamily: "Rancho, cursive" }}><FaArrowLeft /> Back To Home</button>
            <form className="flex justify-center">
                <fieldset className="fieldset bg-gray-400 border-base-300 rounded-box w-xl border p-15">
                    <legend className="fieldset-legend text-lg font-semibold pt-10">Coffee Details</legend>

                    <label className="label">Name</label>
                    <input type="text" className="input input-bordered w-full" placeholder="Enter Coffee Name" />

                    <label className="label">Supplier</label>
                    <input type="text" className="input input-bordered w-full" placeholder="Enter Coffee Supplier" />

                    <label className="label">Category</label>
                    <input type="text" className="input input-bordered w-full" placeholder="Enter Coffee Category" />
                </fieldset>
            </form>
        </div>
    );
};

export default AddCoffee;
