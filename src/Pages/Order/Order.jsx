import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProviders/AuthProviders";
import toast, { Toaster } from "react-hot-toast";

const Order = () => {
  const item = useLoaderData();
  const { user } = useContext(AuthContext);

  const { _id,name, image, origin, quantity, shortDescription } = item || {};

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  const handlePurchase=()=>{
    fetch('http://localhost:5000/carts', {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({id:_id, image, name,origin,quantity,shortDescription,today,email:user.email}),
      })
        .then((result) => result.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Successfully Added Cart!");
          } else {
            toast.error("Already added this Food");
          }
          console.log(data);
        })
        .catch((error) => console.log(error));
  }
  
  return (
   
    <div className="card border-4 border-green-600  w-auto bg-base-100 shadow-xl">
         <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <figure className=" pt-10">
        <img src={image} alt="Shoes" className="rounded-xl " />
      </figure>
      <div className="card-body  items-center text-center">
        <h2 className="card-title">FoodName: {name}</h2>
        <p>Buyer name: {user?.displayName}</p>
        <p> Buyer email: {user?.email}</p>
        <p>Quantity : {quantity}</p>
        <p>Origin : {origin}</p>
        <p>{shortDescription}</p>
        <p>Today :{today}</p>

        <div className="card-actions">
          <button onClick={handlePurchase} className="btn btn-primary">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
