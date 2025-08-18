const AddCoffee = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-500">
            <form className="flex justify-center">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-lg font-semibold">Coffee Details</legend>

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
