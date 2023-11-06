import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProviders/AuthProviders";
import { Helmet } from "react-helmet-async";

const DetailsPage = () => {
  const item = useLoaderData();
  const {user}=useContext(AuthContext);

  // eslint-disable-next-line no-unused-vars
  const { _id, name, image, category,origin, price, quantity,shortDescription } =
    item || {};
  return (
    <div className="card border-4 border-violet-500  w-auto bg-base-100 shadow-xl">
      <Helmet>
        <title>Cheesy | Food Details</title>
      </Helmet>
      <figure className=" pt-10">
        <img  src={image} alt="Shoes" className="rounded-xl " />
      </figure>
      <div className="card-body  items-center text-center">
        <h2 className="card-title">FoodName: {name}</h2>
        <p className="text-blue-500 text-xl font-semibold">Made By {user?.email}</p>
        <p>Category :{category}</p>
        <p>Price : {price}</p>
        <p>Quantity : {quantity}</p>
        <p>Origin : {origin}</p>
        <p>{shortDescription}</p>
        
        <div className="card-actions">
          <Link to={`/order/${_id}`}><button  className="btn btn-primary">
            Order Now
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
