import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="max-w-2xl mx-auto">
      <img src="https://i.ibb.co/K9dgxr8/404.gif" alt="" />
      <div className="text-center">
      <Link to='/'><button className="btn btn-primary mt-4">Go Back To Home</button></Link>
      </div>
    </div>
    );
};

export default ErrorPage;