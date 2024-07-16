import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Content from "../components/Content";

const Dashboard = () => {
  return (
    <div className="main font-Poppins">
      <div className="header h-[4.438rem] flex px-[1.250rem] border border-bg-[#D0D5DD]">
        <Header />
      </div>
      <Sidebar />
      <Content />
    </div>
  );
};

export default Dashboard;
