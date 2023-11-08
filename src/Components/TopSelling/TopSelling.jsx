import { useEffect, useState } from "react";
import Topsellsingle from "../TopSellSingle/Topsellsingle";


const TopSelling = () => {
    const [top,setTop]=useState()
    useEffect(()=>{
        fetch('https://restaurant-management-server-orcin.vercel.app/items/topItems')
        .then(res=>res.json())
        .then(data=>{
            setTop(data)
        })
    },[])
    
    return (
        <div className="grid grid-cols-1 ml-4 md:grid-cols-2 ml-0">
            {
                top?.map(topFood=><Topsellsingle key={topFood._id} topFood={topFood}></Topsellsingle>)
            }
            
        </div>
    );
};

export default TopSelling;