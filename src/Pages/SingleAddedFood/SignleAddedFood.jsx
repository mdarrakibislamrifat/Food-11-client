import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProviders/AuthProviders";
import { Link } from "react-router-dom";


const SignleAddedFood = ({cart,carts}) => {
    const { _id,name, image,email, origin, quantity, shortDescription,today } = cart|| {};
    const {user}=useContext(AuthContext);
   
    return (
        <>
            {user?.email===email &&
            
            <div className="card h-full lg:card-side bg-base-100 shadow-xl  p-4 h-[500px] border-4 border-violet-500">
              <figure>
                <img className="w-full" src={image} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2>Origin: {origin}</h2>
                <h2>Quantity: {quantity}</h2>
                <h2>Food Owner: {user?.displayName}</h2>
                <h2>Added Time: {today}</h2>
                
                <p>{shortDescription}</p>
              
                <div className="card-actions justify-end">
                <Link to={`/update/${_id}`}><button
              
              className="btn btn-secondary"
            >
              Update
            </button></Link>
                </div>
              </div>
            </div>
          }
        </>
    );
};

export default SignleAddedFood;