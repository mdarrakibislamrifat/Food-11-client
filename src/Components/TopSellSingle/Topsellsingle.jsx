import { Link } from "react-router-dom";


const Topsellsingle = ({topFood}) => {
    const {_id,name,image,category,price}=topFood || {}
    return (
        <div  className="card border-4 border-violet-500 bg-base-100 shadow-xl">
      <figure className="px-4 pt-10">
        <img 
          src={image}
          alt="Shoes"
          className="rounded-xl h-[500px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Category :{category}</p>
        <p>Price :$ {price}</p>
        <div className="card-actions">
          <Link to={`/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
        </div>
      </div>
    </div>
    );
};

export default Topsellsingle;