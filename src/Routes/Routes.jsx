import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Home/Home";
import Root from "./Root";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from './PrivateRoute';
  const routes = createBrowserRouter([
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
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Registration></Registration>
        },
        {
          path:'/dashboard',
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        }
      ]
    },
  ]);
  export default routes;