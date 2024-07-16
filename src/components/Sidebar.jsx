import React from "react";
import "./Sidebar.css";

import home from "../assets/home.png";
import gameIcon from "../assets/game_icon.png";
import sports from "../assets/sports.png";
import entertainment from "../assets/entertainment.png";
import tech from "../assets/tech.png";
import music from "../assets/music.png";
import blogs from "../assets/blogs.png";
import news from "../assets/news.png";
import jack from "../assets/jack.png";
import simon from "../assets/simon.png";
import tom from "../assets/tom.png";
import megan from "../assets/megan.png";
import cameron from "../assets/cameron.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div
      className={`fixed top-[50px] sm:min-h-screen sm:bottom-[0px] sm:sticky px-2 py-6 mt-2 ${
        sidebar ? "" : "small"
      }`}
    >
      <div className="flex flex-col gap-4 sm:z-50 sm:flex-row sm:fixed sm:bottom-[-1px] sm:border-none sm:bg-gray-700 sm:px-3 sm:py-2 sm:left-0 sm:w-full sm:h-[50px] sm:justify-evenly sm:gap-0">
        <div
          onClick={() => setCategory(0)}
          className={`${
            category === 0 ? "border-b-4 border-red-800 sm:px-2" : ""
          } flex items-center gap-6 px-3`}
        >
          <img
            className="cursor-pointer w-[25px] sm:w-[250px]"
            src={home}
            alt=""
          />
          <p className="sm:hidden cursor-pointer text-md">Home</p>
        </div>
        <div
          onClick={() => setCategory(20)}
          className={`${
            category === 20 ? "border-b-4 border-red-800" : ""
          } flex items-center gap-6 px-3`}
        >
          <img
            className="cursor-pointer w-[25px] sm:w-[250px]"
            src={gameIcon}
            alt=""
          />
          <p className="sm:hidden cursor-pointer text-md">Games</p>
        </div>
        <div
          onClick={() => setCategory(24)}
          className={`${
            category === 24 ? "border-b-4 border-red-800" : ""
          } flex items-center gap-6 px-3`}
        >
          <img
            className="cursor-pointer w-[25px] sm:w-[250px]"
            src={entertainment}
            alt=""
          />
          <p className="sm:hidden cursor-pointer text-md">Entertainment</p>
        </div>
        <div
          onClick={() => setCategory(28)}
          className={`${
            category === 28 ? "border-b-4 border-red-800" : ""
          } flex items-center gap-6 px-3`}
        >
          <img
            className="cursor-pointer w-[25px] sm:w-[250px]"
            src={tech}
            alt=""
          />
          <p className="sm:hidden cursor-pointer text-md">Technology</p>
        </div>
        <div
          onClick={() => setCategory(10)}
          className={`${
            category === 10 ? "border-b-4 border-red-800" : ""
          } flex items-center gap-6 px-3`}
        >
          <img
            className="cursor-pointer w-[25px] sm:w-[250px]"
            src={music}
            alt=""
          />
          <p className="sm:hidden cursor-pointer text-md">Music</p>
        </div>
        <div
          onClick={() => setCategory(22)}
          className={`${
            category === 22 ? "border-b-4 border-red-800" : ""
          } flex items-center gap-6 px-3`}
        >
          <img
            className="cursor-pointer w-[25px] sm:w-[250px]"
            src={blogs}
            alt=""
          />
          <p className="sm:hidden cursor-pointer text-md">Blogs</p>
        </div>
        <div
          onClick={() => setCategory(17)}
          className={`${
            category === 17 ? "border-b-4 border-red-800" : ""
          } flex items-center gap-6 px-3`}
        >
          <img
            className="cursor-pointer w-[25px] sm:w-[250px]"
            src={sports}
            alt=""
          />
          <p className="sm:hidden cursor-pointer text-md">Sports</p>
        </div>
        <div
          onClick={() => setCategory(25)}
          className={`${
            category === 25 ? "border-b-4 border-red-800" : ""
          } flex items-center gap-6 px-3`}
        >
          <img
            className="cursor-pointer w-[25px] sm:w-[250px]"
            src={news}
            alt=""
          />
          <p className="sm:hidden cursor-pointer text-md">News</p>
        </div>
      </div>
      <div className="hr h-[1px] bg-gray-400 mt-3 sm:hidden"></div>
      <div className="sm:hidden">
        <h1 className="text-sm m-2 font-medium px-2">Subscribed</h1>
        <div className="flex items-center gap-4 px-3 mt-4">
          <img className="w-[25px] rounded-full" src={jack} alt="" />
          <p className="text-md cursor-pointer">Pewdiepie</p>
        </div>
        <div className="flex items-center gap-4 px-3 mt-4">
          <img className="w-[25px] rounded-full" src={simon} alt="" />
          <p className="text-md cursor-pointer">MrBeast</p>
        </div>
        <div className="flex items-center gap-4 px-3 mt-4">
          <img className="w-[25px] rounded-full" src={tom} alt="" />
          <p className="text-md cursor-pointer">Indian Hacker</p>
        </div>
        <div className="flex items-center gap-4 px-3 mt-4">
          <img className="w-[25px] rounded-full" src={megan} alt="" />
          <p className="text-md cursor-pointer">Great Stack</p>
        </div>
        <div className="flex items-center gap-4 px-3 mt-4">
          <img className="w-[25px] rounded-full" src={cameron} alt="" />
          <p className="text-md cursor-pointer">Chai Aur Code</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
