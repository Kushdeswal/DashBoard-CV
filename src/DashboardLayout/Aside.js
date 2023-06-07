import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Aside = (props) => {
  return (
    <>
      {/* small aside */}
      {props.show ? (
        <div className="w-[70px] px-2 py-4  flex flex-col ">
          <ul className="mt-2 flex flex-col gap-3 px-0 " >
            <li className="h-12 px-3 bg-slate-700 text-white font-bold flex items-center rounded-lg">
              <FontAwesomeIcon icon="fa-solid fa-chart-simple" />
            </li>

            <li className="bg-purple-100 px-3 py-2  rounded-lg text-purple-800 text-lg font-medium ">
            <Link className="text-purple-800 text-decoration-none " to="/profile">
            <FontAwesomeIcon icon="fa-regular fa-user" />
              
              </Link> 
            </li>

            <li className=" px-3 py-2  rounded-lg  text-lg font-medium hover:bg-purple-100  hover:text-purple-800">
            <Link className="text-black text-decoration-none " to="/todo">
            <FontAwesomeIcon icon="fa-solid fa-file-pen" />

            </Link>
            </li>

            <li className=" px-3 py-2  rounded-lg  text-lg font-medium hover:bg-purple-100 hover:text-purple-800">
            <Link className="text-black text-decoration-none " to="/chart">
            <FontAwesomeIcon icon="fa-solid fa-chart-pie" />
            </Link>
            </li>
            <li className=" px-3 py-2   rounded-lg  text-lg font-medium hover:bg-purple-100 hover:text-purple-800">
            <Link className="text-black text-decoration-none " to="/other">
            <FontAwesomeIcon icon="fa-solid fa-bars-progress" />
              
              </Link> 
            </li>
          </ul>
        </div>
      ) : (
        // big aside
        <div className="h-full w-full px-2 py-4 ">
          <div>
            <h1 className="h-12 px-3 bg-slate-700 text-white text-xl font-bold flex items-center rounded-lg">
              Dashboard
            </h1>
            <ul className="mt-4 flex flex-col gap-3 px-0 ">

              <li className="bg-purple-100  py-2 px-3 rounded-lg text-purple-800 text-lg font-medium ">
                <FontAwesomeIcon icon="fa-regular fa-user" /><Link className="text-purple-800 text-decoration-none px-2" to="/profile">Profile</Link>  
              </li>
              <li className=" px-3 py-2 rounded-lg text-lg font-medium hover:bg-purple-100 hover:text-purple-800">
                <FontAwesomeIcon icon="fa-solid fa-file-pen"  /> <Link className="text-black text-decoration-none px-2" to="/todo">Todo</Link>
              </li>
              <li className=" px-3 py-2  rounded-lg  text-lg font-medium hover:bg-purple-100 hover:text-purple-800">
                <FontAwesomeIcon icon="fa-solid fa-chart-pie" /> 
                      <Link className="text-black text-decoration-none px-2" to="/chart">Charts</Link> 
              </li>
              <li className=" px-3 py-2 rounded-lg text-lg font-medium hover:bg-purple-100 hover:text-purple-800 ">
                <FontAwesomeIcon icon="fa-solid fa-bars-progress" /> <Link className="text-black text-decoration-none px-2" to="/other">OtherProjects</Link> 
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Aside;
library.add(fab, fas, far);
