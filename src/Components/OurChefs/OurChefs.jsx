import { Link } from "react-router-dom";


const OurChefs = () => {
    return (
        <div className="hero h-[600px] ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="flex-[1]">
    <img src="https://i.ibb.co/hFgx3Tf/cheerful-young-cook-uniform-showing-okay-gesture-1.jpg" className="rounded-lg shadow-2xl" />
    </div>
    <div className="flex-[1]">
      <h1 className="text-5xl font-bold">Executive Chef</h1>
      <p className="py-6">This person is in charge of all activities related to the kitchen, which usually includes menu creation, management of kitchen staff, ordering and purchasing of inventory, controlling raw material costs and plating design. Chef de cuisine is the traditional French term from which the English word chef is derived.</p>
      <Link to='/allchefs'><button className="btn btn-primary">See All Chefs</button></Link>
    </div>
  </div>
</div>
    );
};

export default OurChefs;