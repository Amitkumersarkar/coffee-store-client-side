import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    const { _id, name, photo, category, details, chef, taste, supplier } = coffee;

    const handleModify = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, modify it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //     title: "Modified!",
                //     text: "Your item has been modified.",
                //     icon: "success"
                // });
                console.log('modify successfully');
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name : {name}</h2>
                    <p>Category : {category}</p>
                    <p>Supplier : {supplier}</p>
                    <p>Details : {details}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn btn-info text-white join-item">View</button>
                        <button onClick={() => handleModify(_id)} className="btn btn-secondary join-item">Modify</button>
                        <button className="btn btn-primary join-item">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;