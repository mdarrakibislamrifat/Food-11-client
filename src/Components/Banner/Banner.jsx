import { Link } from "react-router-dom";

const Banner = () => {
  return (
    
    <div className="hero w-[425px] md:w-[725px] lg:w-full h-[600px] " style={{backgroundImage: 'url(https://i.ibb.co/wp56mZ6/diliara-garifullina-p-N-o2r-Iv8q-I-unsplash-1.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">All Food Available Here</h1>
      <p className="mb-5">A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.</p>
      <Link to='/allMenu'><button className="btn btn-primary">Check Menu</button></Link>
    </div>
  </div>
</div>
  );
};

export default Banner;
