
import './pagination.css'
import SingleFoodCard from "../../Components/SingleFoodCard/SingleFoodCard";
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import Lottie from 'lottie-react';
import animation from '../../assets/loading.json'
const Fooditems = () => {
  
  const [items,setItems]=useState([])
  // eslint-disable-next-line no-unused-vars
  const [cardsData, setCardsData] = useState(items);
  const [itemsPerPage,setItemsPerPage]=useState(9);
  const [currentPage,setCurrentPage]=useState(0);
  const [loading,setLoading]=useState(false);
  // const [fetchLoad,setFetchLoad]=useState(false)

  const [countData, setCountData] = useState();
  

  useEffect(()=>{
    
  fetch(`http://localhost:5000/items?page=${currentPage}&&size=${itemsPerPage}`)
  .then(res=>res.json())
  .then(data=>setItems(data))
  },[currentPage,itemsPerPage])



  useEffect(() => {
    fetch("http://localhost:5000/itemsCount")
      .then((res) => res.json())
      .then((data) => setCountData(data));
  }, []);



  const numberOfPages = Math.ceil(countData?.count / itemsPerPage);

  const pages=[]
    for(let i=0;i<numberOfPages;i++){
        pages.push(i)
    }



  useEffect(() => {
    setCardsData(items);
  }, [items]);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true)
    setTimeout(()=>{
      const value = e.target.text.value.toLowerCase() ;
      let filterItem=[]
      if(value=== ''){
        filterItem=items
      }else{
      filterItem = items?.filter((sData) => sData.name.toLowerCase() === value);
      }
      
      setItems(filterItem)
      setLoading(false)
    },1000)
    
    
  };


  const handleitemsPerPage=e=>{
    const value=parseInt(e.target.value)
    console.log(value)
    setItemsPerPage(value);
    setCurrentPage(0);
  }

  const handlePreviousPage=()=>{
    if(currentPage>0){
        setCurrentPage(currentPage-1)
    }
  }

  const handleNextPage=()=>{
    if(currentPage<pages.length-1){
        setCurrentPage(currentPage+1)
    }
  }
 
 

  return (
    <div>
      <div>
        <form onSubmit={handleSearch} className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search Here"
            name="text"
            className="input input-bordered input-primary text-black w-full max-w-xs"
          />
          <input
            className="bg-[#FF444A] p-[13px] rounded-lg text-base font-semibold text-white"
            type="submit"
            value="Search"
          />
        </form>
      </div>
      <Helmet>
        <title>Cheesy | Food Items</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading? (<Lottie animationData={animation}></Lottie>) : 
        
        (
          items?.map((item) => (
          <SingleFoodCard
            key={item._id}
            item={item}
            
          ></SingleFoodCard>
        )))      }
        
      </div>
      <div className='pagination'>
        
        <button onClick={handlePreviousPage}>Prev</button>
        {
            pages?.map(page=><button className={currentPage===page && 'selected'} onClick={()=>setCurrentPage(page)}
                 key={page}>{page}</button>)
        }
        <button onClick={handleNextPage}>Next</button>
        <select  value={itemsPerPage} onChange={handleitemsPerPage} name="" id="">
            <option value="5">5</option>
            <option value="9">9</option>
            <option value="18">18</option>
            <option value="27">27</option>
        </select>
      </div>
    </div>
  );
};

export default Fooditems;
