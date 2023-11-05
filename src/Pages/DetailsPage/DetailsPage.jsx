import { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const item = useLoaderData();
  const { _id, name, image, category, price, quantity,shortDescription } =
    item || {};
  return (
    <div className="card border-4 border-violet-500  w-auto bg-base-100 shadow-xl">
      <Toaster position="top-center" reverseOrder={false} />
      <figure className=" pt-10">
        <img  src={image} alt="Shoes" className="rounded-xl " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">FoodName: {name}</h2>
        <p>Category :{category}</p>
        <p>Price : {price}</p>
        <p>Quantity : {quantity}</p>
        <p>{shortDescription}</p>
        <div className="card-actions">
          <button  className="btn btn-primary">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
