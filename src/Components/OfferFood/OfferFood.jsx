const OfferFood = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
        {/* first card */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/hcmhs7P/04december-2.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        {/* first card */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/dm3Fq3f/2528365.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        {/* first card */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/NyBS4wJ/6248221.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-center">
            <button className="btn btn-md btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferFood;
