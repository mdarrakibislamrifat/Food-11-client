
import { useLoaderData } from "react-router-dom";
import SingleOrder from "../SingleOrder/SingleOrder";
import NodataFound from "../../Components/NoDataFound/NodataFound";
import { useState } from "react";


const OrderedFoodItem = () => {
    const orderedItem=useLoaderData();
    const [carts, setCarts] = useState(orderedItem);
    const handleCart = (filterCarts) => {
        setCarts(filterCarts);
      };
 
    
    return (
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
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