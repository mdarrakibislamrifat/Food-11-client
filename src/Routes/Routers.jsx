import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import Home from "../Components/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";

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
        }
      ]
    },
  ]);
  export default router;