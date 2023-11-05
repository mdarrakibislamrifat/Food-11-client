import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Components/AuthProviders/AuthProviders";


const AddFood = () => {
    const {user}=useContext(AuthContext);


  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const origin = form.origin.value;

    const product = {
      image,
      name,
      category,
      quantity,
      price,
      shortDescription,
      origin,
    };

    fetch('http://localhost:5000/items', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({image,name,category,quantity,price,shortDescription,origin,email:user?.email}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Successfully Add Cart!");
        }
      });
  };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleAddProduct}>
        {/*image */}
        <div className="mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/*  */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Food Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Food Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/*  */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="type"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/*  */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="shortDescription"
                placeholder="Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Food Origin</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="origin"
                placeholder="Food Origin"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          className="btn bg-violet-700 btn-block text-white"
          type="submit"
          value="Add Food"
        />
      </form>
    </div>
  );
};

export default AddFood;
