import error from "../assets/404/404.gif";
const ErrorPage = () => {
    return (
        <div className="flex justify-center mt-15">
            <img src={error} alt="" />
        </div>
    );
};

export default ErrorPage;