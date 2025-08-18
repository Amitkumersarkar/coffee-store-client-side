
const CoffeeCard = ({ coffee }) => {
    const { name, photo, category, details, chef, taste, supplier } = coffee;
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
                        <button className="btn join-item">ViewDetails</button>
                        <button className="btn join-item">Modify</button>
                        <button className="btn join-item">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;