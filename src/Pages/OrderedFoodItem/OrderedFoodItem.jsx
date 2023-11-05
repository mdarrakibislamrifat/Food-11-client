import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProviders/AuthProviders";


const OrderedFoodItem = () => {
    const orderedItem=useLoaderData();
    const {user}=useContext(AuthContext);
    
    return (
        <div>
            My ordered foot item here
        </div>
    );
};

export default OrderedFoodItem;