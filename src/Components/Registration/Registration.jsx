
import { useContext, useState } from "react";

import { AuthContext } from "../AuthProviders/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";


const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [registerError, SetRegisterError] = useState("");
  const location = useLocation();
  

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    setError("");
    SetRegisterError("");
    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.{6,}).*$/.test(password)
    ) {
      setError(
        "Please provide more than 6 characters,one capital letter and a special character",
      );
    } else {
      createUser(email, password, photo, name)
        .then((result) => {
          updateProfile(result.user, {
            displayName: `${name}`,
            photoURL: `${photo}`,
          });
          toast.success("Successfully Register!");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

 

  return (
    <div className="hero my-10">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="hero-content ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <p className="text-red-400">{error}</p>
            </div>
            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Already you have an account? Please
              <Link
                className="font-semibold text-amber-500 transition-colors hover:text-blue-700"
                to="/login"
              >
                Login
              </Link>
            </p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Register;