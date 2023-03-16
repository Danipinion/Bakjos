import { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../assets/icon.png";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed w-full z-30">
      {/* <nav className="navbar navbar-expand-md bg-orange-400 w-full"> */}
      <nav
        className={
          open
            ? "navbar navbar-expand-md bg-orange-400 w-full h-32 transition-all"
            : "navbar navbar-expand-md bg-orange-400 w-full"
        }
      >
        <div className="flex justify-between items-center w-full px-10 py-3">
          <div className="navbar-brand font-lobster flex items-center">
            <img src={icon} alt="icon" className="w-10" />
            <h5 className="text-xl">BaksoJos</h5>
          </div>
          <button
            className="navbar-toggler rotate-90 sm:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span className="border-2 border-black m-0.5"></span>
            <span className="border-2 border-black m-0.5"></span>
            <span className="border-2 border-black m-0.5"></span>
          </button>
          {/* <div className="navbar-collapse font-poppins hidden"> */}
          <div
            className={
              open
                ? "navbar-collapse font-poppins block sm:flex absolute top-20 left-12 w-full"
                : "navbar-collapse font-poppins hidden sm:flex"
            }
          >
            <ul className="navbar-items mx-auto flex gap-7">
              <li>
                <NavLink
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className="nav-link"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className="nav-link"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
