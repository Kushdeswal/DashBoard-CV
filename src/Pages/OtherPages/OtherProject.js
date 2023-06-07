import React from "react";

const OtherProject = () => {
  return (
    <div className="bg-white h-full">
      <div className=" py-[20px] px-3 ">
        <div className="  h-[50px] bg-gray-200 rounded flex items-center  px-3 pt-1 text-purple-800">
          <h4>Other Projects </h4>
        </div>
      </div>

      <div className="h-[240px] flex justify-evenly pt-8">
        <div className="h-[320px] w-[250px] rounded-2xl border-2 overflow-hidden bg-white ">
          <img src="pic9.png" alt="" />

          <div className=" h-[175px] border-t-2">
            <h6 className="mt-3 ml-4">Form</h6>
            <p className="text-muted text-sm mt-1 ml-4">
              An login & register <br /> form based on React Js
            </p>

            <a href="https://github.com/Kushdeswal/Form.git" className="text-decoration-none">
              <button className="border-2 rounded px-3 py-1 mt-2 ml-4">
                Visit
              </button>
            </a>
          </div>
        </div>

        <div className="h-[320px] w-[250px] rounded-2xl border-2 overflow-hidden bg-white ">
          <img src="pic10.png" alt="" />

          <div className=" h-[175px] border-t-2">
            <h6 className="mt-3 ml-4">ToDo</h6>
            <p className="text-muted text-sm mt-1 ml-4">
              An ToDo list
              <br />
              based on React Js
            </p>
            <a href="https://github.com/Kushdeswal/ToDo-App.git" className="text-decoration-none">
              <button className="border-2 rounded px-3 py-1 mt-2 ml-4">
                Visit
              </button>
            </a>
          </div>
        </div>

        <div className="h-[320px] w-[250px] rounded-2xl border-2 overflow-hidden bg-white ">
          <img src="pic12.png" alt="" />
          <div className=" h-[175px] border-t-2">
            <h6 className="mt-3 ml-4">Game</h6>
            <p className="text-muted text-sm mt-1 ml-4">
              A Rock paper & Scissors <br /> Game based on JavaScript
            </p>
            <a href="https://github.com/Kushdeswal/Game.git" className="text-decoration-none">
              <button className="border-2 rounded px-3 py-1 mt-2 ml-4">
                Visit
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* ===========div 2============= */}
      <div className=" flex justify-evenly pt-[188px] pb-[18px]">
        <div className="h-[320px] w-[250px] rounded-2xl border-2 overflow-hidden bg-white ">
          <img src="pic11.png" alt="" />

          <div className=" h-[175px] border-t-2">
            <h6 className="mt-3 ml-4">Timer</h6>
            <p className="text-muted text-sm mt-1 ml-4">
              A Countdown Timer <br />
              based on JavaScript
            </p>
            <a href="https://github.com/Kushdeswal/Countdown-Timer.git" className="text-decoration-none">
              
              <button className="border-2 rounded px-3 py-1 mt-2 ml-4">
                Visit
              </button>
            </a>
          </div>
        </div>
        <div className="h-[320px] w-[250px] rounded-2xl border-2 overflow-hidden bg-white ">
          <img src="pic7.png" alt="" />
          <div className=" h-[175px] border-t-2">
            <h6 className="mt-3 ml-4">Dronix</h6>
            <p className="text-muted text-sm mt-1 ml-4">
              A responsive web <br /> based on Html,Css and Js{" "}
            </p>
            <a href=" https://github.com/Kushdeswal/ResponsiveWebsite.git" className="text-decoration-none">
              <button className="border-2 rounded px-3 py-1 mt-2 ml-4">
                Visit
              </button>
            </a>
          </div>
        </div>
        <div className="h-[320px] w-[250px] rounded-2xl border-2 overflow-hidden bg-white ">
          <img src="pic8.png" alt="" />
          <div className=" h-[175px] border-t-2">
            <h6 className="mt-3 ml-4">Porto</h6>
            <p className="text-muted text-sm mt-1 ml-4">
              
              A web created using <br />
              Html,Css,Js
            </p>
            <a href="https://github.com/Kushdeswal/Porto-web.git " className="text-decoration-none">
              <button className="border-2 rounded px-3 py-1 mt-2 ml-4">
                Visit
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* ===========div 3============= */}
      <div className=" flex justify-evenly pt-[58px] pb-[18px]">
        <div className="h-[320px] w-[250px] rounded-2xl border-2 overflow-hidden bg-white ">
          <img src="pic6.png" alt="" />
          <div className=" h-[175px] border-t-2">
            <h6 className="mt-3 ml-4">VStore</h6>
            <p className="text-muted text-sm mt-1 ml-4">
              Html, CSS and JS <br /> commerce templare
            </p>
            <a href="https://github.com/Kushdeswal/V-store.git " className="text-decoration-none">
              <button className="border-2 rounded px-3 py-1 mt-2 ml-4">
                Visit
              </button>
            </a>
          </div>
        </div>

        <div className="h-[330px] w-[250px] text-blue-500 rounded-2xl border-2 flex justify-center  items-center overflow-hidden bg-white ">
          <h2>Soon</h2>
        </div>

        {/* <div className="h-[350px] w-[250px] rounded-2xl border-2 overflow-hidden bg-white ">
            <img src="pic11.png" alt="" />
          <div className=" h-[175px] border-t-2">
            <h6 className="mt-3 ml-4">VStore</h6>
            <p className="text-muted text-sm mt-1 ml-4">Vanilla CSS and JS <br /> commerce templare</p>
            <button className="border-2 rounded px-3 py-1 mt-2 ml-4">Visit</button>
          </div>
        </div> */}
      </div>

      {/* ===========div 3============= */}
    </div>
  );
};

export default OtherProject;
