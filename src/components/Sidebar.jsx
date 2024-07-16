import React, { useState } from "react";
import dashboardIcon from "../assets/icons/dashboardi.png";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import { RxDashboard } from "react-icons/rx";
import ShareOptions from "./ShareOptions";

const Sidebar = () => {
  const [isShareholdersOpen, setIsShareholdersOpen] = useState(false);

  const toggleShareholdersMenu = () => {
    setIsShareholdersOpen(!isShareholdersOpen);
    console.log(isShareholdersOpen);
  };
  return (
    <div className="sidebar border border-bg-[#D0D5DD] py-[1.563rem]">
      <ul className=" text-[#334054] ">
        <NavItem
          text="Dashboard"
          icon={<RxDashboard size="24px" color="#334054" />}
        />
        <NavItem
          text="Branches"
          displayDownIcon={true}
          icon="/icons/sprite.svg#icon-branch"
        />

        <NavItem
          text="Share Holders"
          displayDownIcon={true}
          icon="/icons/sprite.svg#icon-users"
          onClick={toggleShareholdersMenu}
        />
        {toggleShareholdersMenu && (<ShareOptions />)}
        <NavItem
          text="AGM Registration"
          displayDownIcon={true}
          icon="/icons/sprite.svg#icon-user"
        />
        <NavItem
          text="Elections"
          displayDownIcon={true}
          icon="/icons/sprite.svg#icon-election"
        />
        <NavItem
          text="Approvals"
          displayDownIcon={true}
          icon="/icons/sprite.svg#icon-approval"
        />
        <NavItem
          text="Shared Transaction"
          displayDownIcon={true}
          icon="/icons/sprite.svg#icon-transaction"
        />
        <NavItem
          text="Insights"
          displayDownIcon={true}
          icon="/icons/sprite.svg#icon-insights"
        />
        <NavItem
          text="Dividend"
          displayDownIcon={true}
          icon="/icons/sprite.svg#icon-dividend"
        />
        <NavItem
          text="Request Reprint"
          displayDownIcon={true}
          icon="/icons/sprite.svg#icon-reprint"
        />
        <NavItem
          text="Announce Percentage"
          icon="/icons/sprite.svg#icon-announce"
        />
        <NavItem
          text="Reports"
          displayDownIcon={true}
          icon="/icons/sprite.svg#icon-reports"
        />
        <NavItem
          text="Auditors Reports"
          displayDownIcon={true}
          icon="/icons/sprite.svg#icon-auditors-reports"
        />
        {/* <li className=" flex items-center hover:bg-[#EAECF0] p-[0.625rem]">
          <img
            className="color-[#334054] pl-[0.688rem]"
            src={dashboardIcon}
            alt=""
          />
          <span className="pl-[0.625rem]">Dashboard</span>
        </li> */}
        {/* <div className="hover:bg-[#EAECF0] p-[0.625rem]">
          <button className="flex items-center">
            <img className="pl-[0.688rem]" src={dashboardIcon} alt="" />
            <span className="pl-[0.625rem]">Branches</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-[4.25rem]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="hover:bg-[#EAECF0] p-[0.625rem]">
          <button
            onClick={toggleShareholdersMenu}
            className="flex items-center"
          >
            <img className="pl-[0.688rem]" src={dashboardIcon} alt="" />
            <span className="pl-[0.625rem]">Share Holders</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-[2.120rem]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          {isShareholdersOpen && (
            <div className="">
              <ul>
                <li className="mb-2">Shareholders </li>
                <li className="mb-2">Approved Pending Edits</li>
                <li className="mb-2">Print ID</li>
                <li className="mb-2">Staff Share Holders </li>
                <li className="mb-2">Member Share Holders </li>
                <li className="mb-2">Director Share Holders </li>
                <li className="mb-2">Family Share Holders </li>
                <li className="mb-2">Cooperate Share Holders </li>
                <li className="mb-2">Management Share Holders </li>
                <li className="mb-2">Ex-Staff Share Holders </li>
                <li className="mb-2">Ex-Director Share Holders </li>
                <li className="mb-2">New Share Holders</li>
                <li className="mb-2">Import Share Holders</li>
                <li className="mb-2">Combine Accounts</li>
                <li className="mb-2">Accounts Combine</li>
              </ul>
            </div>
          )}
        </div>
        <div className="hover:bg-[#EAECF0] p-[0.625rem]">
          <button className="flex items-center">
            <img className="pl-[0.688rem]" src={dashboardIcon} alt="" />
            <span className="pl-[0.625rem]">AGM Registration</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-[0.875rem]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="hover:bg-[#EAECF0] p-[0.625rem]">
          <button className="flex items-center">
            <img className="pl-[0.688rem]" src={dashboardIcon} alt="" />
            <span className="pl-[0.625rem]">Elections</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-[4.745rem]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="hover:bg-[#EAECF0] p-[0.625rem]">
          <button className="flex items-center">
            <img className="pl-[0.688rem]" src={dashboardIcon} alt="" />
            <span className="pl-[0.625rem]">Insights</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-[5.000rem]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="hover:bg-[#EAECF0] p-[0.625rem]">
          <button className="flex items-center">
            <img className="pl-[0.688rem]" src={dashboardIcon} alt="" />
            <span className="pl-[0.625rem]">Dividend</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="hover:bg-[#EAECF0] p-[0.625rem]">
          <button className="flex items-center">
            <img className="pl-[0.688rem]" src={dashboardIcon} alt="" />
            <span className="pl-[0.625rem]">Request Reprint</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center hover:bg-[#EAECF0] p-[0.625rem]">
          <img className="pl-[0.688rem]" src={dashboardIcon} alt="" />
          <span className="pl-[0.625rem]">Announce Percentage</span>
        </div>{" "}
        <div className="hover:bg-[#EAECF0] p-[0.625rem]">
          <button className="flex items-center">
            <img className="pl-[0.688rem]" src={dashboardIcon} alt="" />
            <span className="pl-[0.625rem]">Reports</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="hover:bg-[#EAECF0] p-[0.625rem]">
          <button className="flex items-center">
            <img className="pl-[0.688rem]" src={dashboardIcon} alt="" />
            <span className="pl-[0.625rem]">Auditors Reports</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div> */}
      </ul>
    </div>
  );
};

export default Sidebar;
