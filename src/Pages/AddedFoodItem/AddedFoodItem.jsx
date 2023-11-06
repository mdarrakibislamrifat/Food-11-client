import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SignleAddedFood from "../SingleAddedFood/SignleAddedFood";
import { Helmet } from "react-helmet-async";

const AddedFoodItem = () => {
    const addedFood=useLoaderData();
    const [carts, setCarts] = useState(addedFood);

    const handleCart = (filterCarts) => {
        setCarts(filterCarts);
      };
      
      
    return (
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
        <Helmet>
            <title>Cheesy | Added Food</title>
        </Helmet>
        {
        carts?.map((cart) => (
            <SignleAddedFood
            carts={carts}
            handleCart={handleCart}
            addedFood={addedFood}
            key={cart._id}
            cart={cart}
            ></SignleAddedFood>
          ))}
      </div>
    );
};

export default AddedFoodItem;