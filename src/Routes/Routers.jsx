import { createBrowserRouter } from "react-router-dom";
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
import Order from "../Pages/Order/Order";
import PrivateRoute from "./PrivateRoute";
import AddedFoodItem from "../Pages/AddedFoodItem/AddedFoodItem";
import OrderedFoodItem from "../Pages/OrderedFoodItem/OrderedFoodItem";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import Allmenu from "../Pages/Allmenu/Allmenu";
import { getToken } from "../Helper/Helper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/allMenu",
        element: <Allmenu></Allmenu>,
      },
      {
        path: "/allfood",
        element: <Fooditems></Fooditems>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "allchefs",
        element: <AllChefs></AllChefs>,
      },
      {
        path: "/details/:_id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) =>
          fetch(`https://restaurant-management-server-orcin.vercel.app/items/id/${params._id}`),
      },
      {
        path: "/addFood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/order/:_id",
        element: (
          <PrivateRoute>
            <Order></Order>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://restaurant-management-server-orcin.vercel.app/items/id/${params._id}`),
      },
      {
        path: "/addedFoodItem",
        element: <AddedFoodItem></AddedFoodItem>,
        loader: () => fetch("https://restaurant-management-server-orcin.vercel.app/items"),
      },
      {
        path: "/orderedFoodItem",
        element: <OrderedFoodItem></OrderedFoodItem>,
        loader: () => {
        const token=getToken();
         return fetch("https://restaurant-management-server-orcin.vercel.app/carts",{headers:{token}});
        },
      },
      {
        path: "/update/:id",
        element: <UpdateFood></UpdateFood>,
        loader: ({ params }) =>
          fetch(`https://restaurant-management-server-orcin.vercel.app/items/${params.id}`),
      },
    ],
  },
]);
export default router;
