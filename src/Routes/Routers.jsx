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
import AllChefs from "../Pages/AllChefs/AllChefs";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import AddFood from "../Pages/AddFood/AddFood";

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
        {
          path:'/login',
          element:<Login></Login>
      },
      {
        path:'allchefs',
        element:<AllChefs></AllChefs>
      },
      {
        path:'/details/:_id',
        element:<DetailsPage></DetailsPage>,
        loader:({params})=>fetch(`http://localhost:5000/items/id/${params._id}`)
      },
      {
        path:'/addFood',
        element:<AddFood></AddFood>
      }

      ]
    },
    
  ]);
  export default router;