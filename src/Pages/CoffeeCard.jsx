
const CoffeeCard = ({ coffee }) => {
    const { name, photo, category, details, chef, taste, supplier } = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p>Category : {category}</p>
                <p>Supplier : {supplier}</p>
                <p>Details : {details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;