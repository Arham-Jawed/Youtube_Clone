import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);
  return (
    <div className="flex flex-col sm:min-h-screen min-h-screen">
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`${sidebar ? "pl-60 w-full" : "pl-24"} sm:pl-0`}>
        <Feed category={category} sidebar={sidebar} />
      </div>
    </div>
  );
};

export default Home;
