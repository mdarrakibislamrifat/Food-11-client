import Banner from "../Banner/Banner";
import OfferFood from "../OfferFood/OfferFood";
import OurChefs from "../OurChefs/OurChefs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
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