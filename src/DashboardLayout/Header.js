import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = (props) => {
  const [profile, setprofile] = useState(true);

  const Navigate = useNavigate();

  const User = () => {
    Navigate("/profile");
  };

  const LogOut = () => {
    toast.warning("LogOut Secsessfully");
     Navigate("/login")
  };

  return (
    <>
      <div className="flex items-center h-full z-50">
        <div className="w-1/2">
          <div className="flex h-full  w-[265px] items-center justify-between px-3 ">
            <div className="flex items-center justify-between  gap-2">
              <div className="h-6 w-6 mb-1">
                <img src="logo.png" alt="logo" />
              </div>
              <h1 className="font-semibold text-[24px] border-b-2 text-purple-800 ">
                KUSH
              </h1>
            </div>
            <button
              type="button"
              className="py-1 px-2 hidden md:block  g-purple-100 text-purple-800 hover:bg-purple-800 hover:text-purple-100 rounded"
              onClick={props.btn}
            >
              {props.show ? (
                <FontAwesomeIcon icon="fa-solid fa-bars" />
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-bars" />
              )}
            </button>
            {/* btn 2 for small device aside */}
            <button
              type="button"
              className="py-1 px-4 block md:hidden g-purple-100 text-red-800 hover:bg-purple-800 hover:text-purple-100 rounded"
              onClick={props.btn}
            >
              {props.show ? (
                <FontAwesomeIcon icon="fa-solid fa-bars" />
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-bars" />
              )}
            </button>
          </div>
        </div>

        <div className="flex h-full w-1/2 items-center justify-end  ">
          <div className="img flex w-[160px] h-full items-center justify-end px-2  ">
            <div className="bg-purple-100 text-purple-800 flex w-[45px] h-[42px] items-center justify-center overflow-hidden rounded-full  ">
              <button
                onClick={() => {
                  setprofile(!profile);
                }}
              >
                <img src="profile.png" alt="pic" />
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              setprofile(!profile);
            }}
          >
            <h6 className="mr-[40px] my-1 text-muted text-xs">ADMIN</h6>
          </button>
        </div>
      </div>

      <div className={profile ? "hidden" : "show"}>
        <div className="absolute h-[88px] w-[88px] border-2 z-[9999999] top-[70px] right-[30px] bg-white text-purple-800 rounded px-2 py-1">
          <button className="border-b-2  py-1 px-2 mb-1" onClick={()=>User()}>
            Profile
          </button>
          <button
            className=" py-1 px-1"
            onClick={() => LogOut()}
          >
            LogOut
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
library.add(fab, fas, far);
