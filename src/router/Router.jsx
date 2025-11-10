import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import AllJobs from "../pages/AllJobs";
import AddJob from "../pages/AddJob";
import AcceptedTasks from "../pages/AcceptedTasks";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRouter";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-jobs",
        Component: AllJobs,
        loader: ()=> fetch('http://localhost:3000/allJobs')
      },
      {
        path: "add-job",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "accepted-tasks",
        element: (
          <PrivateRoute>
            <AcceptedTasks></AcceptedTasks>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {

    path: "auth/login",
    element: <Login></Login>,
  },
  {
    path: "auth/register",
    element: <Register></Register>,
  },
]);
