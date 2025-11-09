import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "/logo.png";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const navItems = (
    <>
      <li>
        <NavLink to={"/"} className="nav-link px-3 py-2 font-medium">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/all-jobs"} className="nav-link px-3 py-2 font-medium">
          All Jobs
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/add-job"} className="nav-link px-3 py-2 font-medium">
              Add a Job
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/accepted-tasks"}
              className="nav-link px-3 py-2 font-medium"
            >
              My Accepted Tasks
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-primary text-primary-content shadow-md sticky top-0 z-50">
      <div className="navbar container mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-primary text-primary-content rounded-box w-56"
            >
              {navItems}
            </ul>
          </div>

          {/* Logo */}
          <Link to={"/"} className="flex items-center gap-2">
            <img src={logo} alt="TaskVerse Logo" className="w-10" />
            <h1 className="font-extrabold text-2xl tracking-wide hidden md:block logo-font">
              Task
              <span className="text-secondary">Verse</span>
            </h1>
          </Link>
        </div>

        {/* Center Nav (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navItems}</ul>
        </div>

        {/* Navbar End (Auth Buttons) */}
        <div className="navbar-end ">
          {user ? (
            <div className="dropdown dropdown-end z-50 text-black ">
              {/* Avatar Button */}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar focus:outline-none"
              >
                <div className="w-10 h-10 border-2 border-secondary rounded-full overflow-hidden">
                  <img
                    alt="User Avatar"
                    referrerPolicy="no-referrer"
                    src={
                      user?.photoURL ||
                      "https://www.w3schools.com/howto/img_avatar.png"
                    }
                  />
                </div>
              </div>

              {/* Dropdown Menu */}
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-300 rounded-box shadow-lg mt-3 w-60 p-2 z-50"
              >
                {/* User Info */}
                <div className="px-4 py-2 border-b border-gray-200">
                  <li className="text-lg font-semibold">{user?.displayName}</li>
                  <li className="text-sm text-gray-500">{user?.email}</li>
                </div>

                {/* Menu Items */}
                <li className="mt-2 hover:bg-gray-100 rounded-md">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="hover:bg-gray-100 rounded-md">
                  <Link to="/my-models">My Tasks</Link>
                </li>

                {/* Theme Toggle
                <li className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-md">
                  <span>Dark Mode</span>
                  <input
                    type="checkbox"
                    className="toggle toggle-sm"
                    defaultChecked={localStorage.getItem("theme") === "dark"}
                    onChange={(e) =>
                      handleTheme(e.target.checked ? "dark" : "light")
                    }
                  />
                </li> */}

                {/* Logout Button */}
                <li className="px-4 py-2 mt-2">
                  <button
                    onClick={signOutUser}
                    className="btn btn-secondary btn-sm w-full text-primary"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-x-2">
              <Link
                to={"/auth/login"}
                className="btn btn-outline border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all"
              >
                Login
              </Link>
              <Link
                to={"/auth/register"}
                className="btn bg-secondary border-none text-primary hover:bg-[#e6bb32] transition-all"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
