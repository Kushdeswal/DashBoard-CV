import React, { useState } from "react";
import Header from "./Header";
import Aside from "./Aside";
import PrivateRoutes from "../Routes/PrivateRoutes";
import SmallAside from "./SmallAside";

const DashboardMain = () => {
  const [ShowHide, setShowHide] = useState(false);
  
  const toggle = () => {
    setShowHide(!ShowHide);
  };
  

  return (
    
    <>
      {/*============ Header =================*/}

      <div className="h-[66px] w-screen fixed top-0 right-0 left-0 bg-white z-50 ">
        <Header btn={toggle} show={ShowHide} />
      </div>

      {/*================== Body==========================*/}
      <div className="flex">

        {/*================== Aside big ============== */}
        <div
          className={` bg-white fixed hidden md:block top-[66px] bottom-0 left-0  ${
            ShowHide ? "W-[70px]" : "w-[240px]"
          }  `}
        >
          <Aside show={ShowHide} />
        </div>

 
   {/*=================Small device Aside=================== */}
        <div
          className={`block md:hidden fixed w-[70px] z-[99999] top-[66px] bottom-0 left-0 bg-white ${
            ShowHide ? "block" : "hidden"
          }`}
        >
          <SmallAside show={ShowHide}/>
        </div>

        {/*===================Main==============*/}
        <div
          className={`bg-slate-200 w-screen h-screen rounded-lg mt-[66px] ml-0 ${
            ShowHide
              ? "sm:ml-[75px] sm:rounded-lg"
              : "sm:ml-[240px] sm:rounded-lg"
          }`}
        >
          <PrivateRoutes />
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
