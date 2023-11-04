import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import Home from "../Components/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Fooditems from "../Pages/FoodItems/Fooditems";
import Login from "../Components/Login/Login";
import Register from "../Components/Registration/Registration";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'/allfood',
            element:<Fooditems></Fooditems>
        },
        {
            path:'/register',
            element:<Register></Register>
        },

      ]
    },
    {
        path:'/login',
        element:<Login></Login>
    }
  ]);
  export default router;