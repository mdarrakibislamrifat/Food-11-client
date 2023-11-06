import { useEffect, useState } from "react";
import Topsellsingle from "../TopSellSingle/Topsellsingle";


const TopSelling = () => {
    const [top,setTop]=useState()
    useEffect(()=>{
        fetch('http://localhost:5000/items/topItems')
        .then(res=>res.json())
        .then(data=>{
            setTop(data)
        })
    },[])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            {
                top?.map(topFood=><Topsellsingle key={topFood._id} topFood={topFood}></Topsellsingle>)
            }
            
        </div>
    );
};

export default TopSelling;