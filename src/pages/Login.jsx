import React from "react";
import Logo from "../assets/images/ebits-logo 1.png";
import Share from "../assets/images/share-manager.png";
import Bitcoin from "../assets/images/bitcoin-image.jpg";
import PoweredBy from "../assets/images/powered-by.png";
import Forms from "../components/Forms";
import Products from "../components/Products";
import Cards from "../components/Cards";
import Assets from "../assets/icons/assets-logo.svg";
import Resource from "../assets/icons/human-resource.svg";
import Loans from "../assets/icons/loans.svg";
import Banking from "../assets/icons/mobile-bank.svg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-full flex font-Poppins">
        <div className=" w-[30.25rem]  ">
          <div className="pt-4 pl-[5.438rem]">
            <Link to="login">
              <img className="" src={Logo} alt="company logo" />
            </Link>
          </div>
          <div className="justify-center ">
            <div className="flex justify-center">
              <img className="p-[1.99rem]" src={Share} alt="company logo" />
            </div>
            <div className="flex justify-center text-lg leading-5">
              <p>Staff Login</p>
            </div>
          </div>
          <Forms />
          <Products />
          <div className="cards">
            <Cards
              name="Fixed Assets Manager"
              icon="/icons/sprite.svg#icon-assets"
              handleOnClick={() => navigate("/Fixed_Assets_Manager")}
            />
            <Cards
              name="Human Resource Manager"
              icon="/icons/sprite.svg#icon-human_resource"
              handleOnClick={() => navigate("/Human_Resource_Manager")}
            />
            <Cards
              name="Loans Manager"
              icon="/icons/sprite.svg#icon-loans"
              handleOnClick={() => navigate("/Loans_Manager")}
            />
            <Cards
              name="Mobile Banking"
              icon="/icons/sprite.svg#icon-mobile_bank"
              handleOnClick={() => navigate("/Mobile_Banking")}
            />
          </div>
          <div className="mt-[1.438rem] mb-11 flex justify-center ">
            <img src={PoweredBy} alt="" />
          </div>
        </div>
        <div className=" w-[59.75rem]">
          <img src={Bitcoin} className="h-full" alt="bitcoin image" />
        </div>
      </div>
    </>
  );
};

export default Login;
