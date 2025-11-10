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
import JobDetail from "../pages/JobDetail";
import UpdateJob from "../pages/updateJob";

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
        loader: () => fetch("http://localhost:3000/allJobs"),
      },
      {
        path: "job-detail/:id",
        element: (
          <PrivateRoute>
            <JobDetail></JobDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/allJobs/${params.id}`),
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
        path: "Update-job/:id",
        element: (
          <PrivateRoute>
            <UpdateJob></UpdateJob>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/allJobs/${params.id}`),
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
