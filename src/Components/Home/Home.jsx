import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import OfferFood from "../OfferFood/OfferFood";
import OurChefs from "../OurChefs/OurChefs";
import TopSelling from "../TopSelling/TopSelling";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Cheesy | Home</title>
            </Helmet>
            <div>
            <Banner></Banner>
            </div>
            <div>
                <h2 className="text-4xl font-bold text-center mt-6 mb-4 underline">Top Selling Food</h2>
                <TopSelling></TopSelling>
                <div className="flex justify-center"><Link to='/allfood'><button className="btn btn-primary mt-4">See All</button></Link></div>
            </div>
            <div className="mt-8">
                <h1 className="text-4xl font-bold text-center underline mb-6">Offer Food Items</h1>
                <p></p>
                <OfferFood></OfferFood>
            </div>
            <OurChefs></OurChefs>

        </div>
    );
};

export default Home;