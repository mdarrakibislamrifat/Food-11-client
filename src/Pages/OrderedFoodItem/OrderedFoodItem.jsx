
import { useLoaderData } from "react-router-dom";
import SingleOrder from "../SingleOrder/SingleOrder";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const OrderedFoodItem = () => {
    const orderedItem=useLoaderData();
    const [carts, setCarts] = useState(orderedItem);
    const handleCart = (filterCarts) => {
        setCarts(filterCarts);
      };
 
    
    return (
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
        <Helmet>
          <title>Cheesy | Order food</title>
        </Helmet>
        {
        carts?.map((cart) => (
            <SingleOrder
            carts={carts}
            handleCart={handleCart}
            orderedItem={orderedItem}
            key={cart._id}
            cart={cart}
            ></SingleOrder>
          ))}
      </div>
    );
};

export default OrderedFoodItem;