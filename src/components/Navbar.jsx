import React from "react";
import menu_icon from "../assets/menu.png";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import upload from "../assets/upload.png";
import more from "../assets/more.png";
import notification from "../assets/notification.png";
import user_profile from "../assets/jack.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="m-0 p-0 sticky top-0 shadow-xl sm:w-full">
      <div className="flex justify-between items-center bg-gray-100 py-3 px-6">
        <div className="w-[15%] flex items-center gap-8">
          <img
            onClick={() => setSidebar((prev) => !prev)}
            src={menu_icon}
            className="menu_bar w-[20px] cursor-pointer sm:hidden"
            alt=""
          />
          <Link to="/">
            <img
              src={logo}
              className="youtube_logo lg:w-[70px] sm:h-[30px] sm:w-[55px]"
              alt=""
            />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-2 bg-gray-100 border border-gray-300 w-[40%] rounded-xl py-1 cursor-default ml-[-40px] sm:w-[180px] sm:ml-1">
          <input
            type="text"
            placeholder="Seacrh"
            className="w-[80%] px-3 text-md bg-transparent outline-none"
          />
          <img src={search} className="h-[20px] cursor-pointer" alt="" />
        </div>
        <div className="side_menu flex items-center gap-4">
          <img
            src={upload}
            className="upload w-[35px] cursor-pointer sm:hidden"
            alt=""
          />
          <img
            src={more}
            className="more w-[35px] cursor-pointer sm:hidden"
            alt=""
          />
          <img
            src={notification}
            className="notifi w-[35px] cursor-pointer sm:hidden"
            alt=""
          />
          <img
            src={user_profile}
            className="w-[35px] cursor-pointer rounded-full"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
