import { useLoaderData } from "react-router-dom";
import SingleFoodCard from "../../Components/SingleFoodCard/SingleFoodCard";


const Fooditems = () => {
    const items=useLoaderData();
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {
            items.map(item=><SingleFoodCard key={item._id} item={item}></SingleFoodCard>)
           }
        </div>
    );
};

export default Fooditems;