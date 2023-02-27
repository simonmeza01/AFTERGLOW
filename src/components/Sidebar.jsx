import React from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

const Sidebar = () => {
  return (
    <div className="sidebar flex-1 bg-cyan-600">
      <Navbar />
      <Search/>
      <Chats/>
    </div>
  );
};

export default Sidebar;
