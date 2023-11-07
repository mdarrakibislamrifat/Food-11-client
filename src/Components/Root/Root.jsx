import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";



const Root = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
           
        </div>
    );
};

export default Root;