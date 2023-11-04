import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks=<>
    <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-amber-500 underline font-bold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
    <li>
        <NavLink
          to="/allfood"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-amber-500 underline font-bold"
              : ""
          }
        >
          All Food items
        </NavLink>
      </li>
    <li>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-amber-500  underline font-bold"
              : ""
          }
        >
          Blogs
        </NavLink>
      </li>
    <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-amber-500 underline font-bold"
              : ""
          }
        >
          Login
        </NavLink>
      </li>
    <li>
        <NavLink
          to="/profile"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-amber-500 underline font-bold"
              : ""
          }
        >
          User Profile
        </NavLink>
      </li>
  
    
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img className="w-20" src="https://i.ibb.co/fpkCCYh/5526265.jpg" alt="" />
        <a className="btn btn-ghost normal-case text-xl">Take It Cheesy</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navLinks}
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
