import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const UpdateFood = () => {
    const card = useLoaderData();
  const {_id, image,name,category,quantity,price,shortDescription,origin} =
    card;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const origin = form.origin.value;
    const updateItem = {
      image,
      name,
      category,
      quantity,
      price,
      shortDescription,
      origin,
    };
    fetch(`https://restaurant-management-server-orcin.vercel.app/items/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully Updated Product!");
        }
      });
  };
  return (
    <div>
        <Helmet>
            <title>Cheesy | Update Food</title>
        </Helmet>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleUpdateProduct}>
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
                defaultValue={image}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/*  name and brand name */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={name}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Brand Name"
                defaultValue={category}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* type and price */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="type"
                name="quantity"
                placeholder="Type"
                defaultValue={quantity}
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
                defaultValue={price}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* short description and rating */}
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
                defaultValue={shortDescription}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Origin</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="origin"
                placeholder="Rating"
                defaultValue={origin}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          className="btn bg-violet-700 btn-block text-white"
          type="submit"
          value="Update Food"
        />
      </form>
    </div>
  );
};

export default UpdateFood;