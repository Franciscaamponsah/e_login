import React, { useState } from "react";
import NavItem from "./NavItem";
import { RxDashboard } from "react-icons/rx";
import ShareOptions from "./ShareOptions";

const Sidebar = () => {
  const [isShareholdersOpen, setIsShareholdersOpen] = useState(false);

  const toggleShareholdersMenu = () => {
    setIsShareholdersOpen(!isShareholdersOpen);
  };
  return (
    <div className="sidebar border border-bg-[#D0D5DD] py-[1.563rem] cursor-pointer overflow-y-scroll h-[100vh] scroll">
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
          onHandleShareHolder={toggleShareholdersMenu}
        />
        {isShareholdersOpen && <ShareOptions />}
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
        <NavItem text="Approvals" icon="/icons/sprite.svg#icon-approval" />
        <NavItem
          text="Shared Transaction"
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
      </ul>
    </div>
  );
};

export default Sidebar;
