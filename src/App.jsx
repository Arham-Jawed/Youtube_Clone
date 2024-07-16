import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Player from "./Pages/Player/Player.jsx";

const App = () => {
  const [sidebar,setSidebar] = useState(true)
  return (
    <div className="m-0 p-0">
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Player/>} />
      </Routes>
    </div>
  );
};

export default App;
