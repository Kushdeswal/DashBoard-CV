import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

const ChartMain = () => {
  const [getData, setGetData] = useState([]);

  const getNewData = () => {
    axios
      .get("http://localhost:4400/user_todo")
      .then((res) => {
        setGetData(res.data);
      })
      .catch(() => {
        console.log("Data notget");
      });
  };

  // ============ Pandding / Completed =================>

  const all = getData?.filter((item) => {
    if (item.status === "Completed" || item.status === "Pending") {
      return item;
    }
  }).length;

  const completed = getData?.filter((item) => {
    if (item.status === "Completed") {
      return item;
    }
  }).length;

  const pending = getData?.filter((item) => {
    if (item.status === "Pending") {
      return item;
    }
  }).length;

  useEffect(() => {
    getNewData();
  }, []);

  return (
    <>
      <nav>
        <div className=" py-[20px] px-3 ">
          <div className="  h-[50px] bg-white rounded flex items-center  px-3 pt-1 text-purple-800">
            <h4> Chart</h4>
          </div>
        </div>
        <div className="max-w-screen-xl text-white mx-auto flex flex-wrap gap-4 items-center justify-around  text-lg font-bold">
          <div className="bg-purple-700 h-[120px]  w-[280px]  rounded   ">
            <h5 className="mx-[18px] my-[20px] ">Total Tasks</h5>
            <h5 className="mx-[55px] ">{all}</h5>
            <div className="mx-[190px] -mt-[80px]">
              <FontAwesomeIcon
                className="h-[60px]"
                icon="fa-solid fa-file-pen"
              />
            </div>
          </div>
          <div className="bg-green-700 h-[120px]  w-[280px]  rounded   ">
            <h5 className="mx-[18px] my-[20px] ">Completed</h5>
            <h5 className="mx-[55px] ">{completed}</h5>
            <div className="mx-[190px] -mt-[80px]">
              <FontAwesomeIcon
                className="h-[60px]"
                icon="fa-solid fa-file-circle-check"
              />
            </div>
          </div>
          <div className="bg-red-700 h-[120px]  w-[280px]  rounded   ">
            <h5 className="mx-[18px] my-[20px] ">Pending</h5>
            <h5 className="mx-[55px] ">{pending}</h5>
            <div className="mx-[190px] -mt-[80px]">
              <FontAwesomeIcon
                className="h-[60px]"
                icon="fa-solid fa-file-circle-xmark"
              />{" "}
            </div>
          </div>
        </div>
      </nav>

      <div className="mt-[40px] mx-[40px]">
        <Chart
          options={{
            labels: ["Completed", "Pending"],
            colors: ["#28a745", "#dc3545"],
          }}
          series={[completed, pending]}
          type="donut"
          width="360"
        />

      </div>
    </>
  );
};

export default ChartMain;
library.add(fab, fas, far);
