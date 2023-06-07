import { React, useState, useRef } from "react";
import * as emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify";

const Profile = () => {
  //===For Modal Opn ===>
  const [Modal, setModal] = useState(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Kush-Deswal",
        "template_66vi8ri",
        form.current,
        "uOMO-zsla1p1SIJt5"
      )
      .then(
        (result) => {
          document.getElementById("inputIst").value = " ";
          document.getElementById("inputSnd").value = " ";
          document.getElementById("inputThr").value = " ";

          toast.success("Messege Send", {
            position: "bottom-right",
            theme: "colored",
          });
        },
        (error) => {
          toast.warning("msg not snd", {
            position: "bottom-right",
            theme: "colored",
          });
        }
      );
  };

  return (
    <>
      {/*==============================  modal area==================== */}
      <div className={Modal ? "hidden" : "show"}>
        <div className="absolute h-[355px] w-[310px] top-[122px] mt-1 right-[330px] bg-purple-400 text-white rounded px-2 py-1 z-50">
          <div className="flex justify-between">
            <h4>Add Info</h4>
            <button onClick={() => setModal(!Modal)}>
              <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
            </button>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              id="inputIst"
              type="text"
              name="user_name"
              className="block w-full p-2 text-sm mt-3 t text-black border border-purple-800 rounded-lg "
              placeholder="Name..."
              autoFocus
            />
            <input
              id="inputSnd"
              type="email"
              name="user_email"
              className="block w-full p-2 text-sm mt-3 t text-black border border-purple-800 rounded-lg "
              placeholder="Email..."
              autoFocus
            />
            <textarea
              name="message"
              id="inputThr"
              cols="30"
              rows="3"
              className="block w-full p-2 text-sm mt-3 t text-black border border-purple-800 rounded-lg "
              placeholder="Message..."
            ></textarea>

            <div className="flex justify-end mt-1 mr-[90px]">
              <button
                type="submit"
                value="Send"
                className="border-2 border-white hover:border-purple-300 rounded-lg hover:bg-purple-800 hover:text-white px-2 my-3 py-1"
                onClick={() => {
                  setModal(!Modal);
                }}
              >
                Send
              </button>
            </div>
          </form>
          <div className="absolute bottom-1 right-[2px] ">
            <button
              className="border-2 border-white hover:border-purple-300 rounded-lg hover:bg-purple-800 hover:text-white px-2 my-3 mx-2 py-1"
              onClick={() => setModal(!Modal)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      {/* ====================== */}
      <section className="z-0" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          {/* ===================Avtar Area======================================================== */}
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center ml-12">
                  <img
                    src="pic5.jpg"
                    alt="avatar"
                    className="rounded-circle img-fluid "
                    style={{ width: "150px" }}
                  />
                  <h5 className="my-3 mr-12">Ankush Deswal</h5>
                  <p className="text-muted mb-1 mr-10">Full Stack Developer</p>
                  <p className="text-muted mb-4 mr-10">Dwarka Mor, Delhi</p>
                  <div className="d-flex justify-content-center mb-2 mr-[30px]">
                    <button
                      type="button"
                      className=" py-1 bg-purple-700 text-purple-100 hover:bg-purple-300 text-lg  hover:text-purple-800 rounded px-[15px] -ml-2 "
                      onClick={() => setModal(!Modal)}
                    >
                      <span className="mx-2">
                        <FontAwesomeIcon icon="fa-regular fa-envelope" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* ===================Contact Area================== */}

              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <a
                      href="tel:+917900079052 "
                      className="text-decoration-none"
                    >
                      <li className=" list-group-item d-flex justify-content-between align-items-center p-3 hover:bg-purple-200 hover:text-purple-800">
                        <FontAwesomeIcon
                          icon="fa-solid fa-phone"
                          className="text-purple-800"
                        />
                        <p className="mb-0">+91 7900079052</p>
                      </li>
                    </a>
                    <a
                      href="mailto:kush.deswal0003@gmail.com"
                      className="text-decoration-none"
                    >
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3 hover:bg-purple-200 hover:text-purple-800">
                        <FontAwesomeIcon
                          icon="fa-solid fa-envelope-open-text"
                          className="text-purple-800"
                        />
                        <p className="mb-0">kush.deswal0003@gmail.com</p>
                      </li>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/ankush-deswal-82b926262/"
                      className="text-decoration-none"
                    >
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3 hover:bg-purple-200 hover:text-purple-800">
                        <FontAwesomeIcon
                          icon="fa-brands fa-linkedin-in"
                          className="text-purple-800"
                        />
                        <p className="mb-0">ankush-deswal-82b926262</p>
                      </li>
                    </a>

                    <a
                      href="https://github.com/Kushdeswal "
                      className="text-decoration-none"
                    >
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3 hover:bg-purple-200 hover:text-purple-800">
                        <FontAwesomeIcon
                          icon="fa-brands fa-github"
                          className="text-purple-800"
                        />
                        <p className="mb-0">Kushdeswal</p>
                      </li>
                    </a>

                    <a
                      href="https://codepen.io/kushdeswal "
                      className="text-decoration-none"
                    >
                      <li className="list-group-item d-flex justify-content-between  align-items-center p-3 hover:bg-purple-200 hover:text-white-800">
                        <FontAwesomeIcon
                          icon="fa-brands fa-codepen"
                          className="text-purple-800"
                        />
                        <p className="mb-0">@kushdeswal</p>
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>

            {/* ===================Qualification area ===================== */}

            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  {/* qualification section */}

                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="text-purple-700 border-b-4 border-purple-600 ">
                        <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />{" "}
                        Qualification:-
                      </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <h5 className=" ">MCA </h5>
                    </div>
                    <div className="col-s9">
                      <p className="text-muted -mt-2 mb-2 ml-2">
                        Maharshi Dayanand University{" "}
                        <span className="text-muted text-xs">
                          (2022-24/Rohtak){" "}
                        </span>
                      </p>
                      <p className="text-muted -mt-2 mb-2 ml-2">
                        With the intention to enhance my knowledge, expertise in
                        the field of information technology and artificial
                        intelligence I have selected above mentioned programs.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <h5 className="">BSC(COMPUTER SCINCE) </h5>
                    </div>
                    <div className="col-s9">
                      <p className="text-muted -mt-2 mb-2 ml-2">
                        Maharshi Dayanand University{" "}
                        <span className="text-muted text-xs">
                          (2019-21/Rohtak){" "}
                        </span>
                      </p>
                      <p className="text-muted -mt-2 mb-2 ml-2">
                        Being a student of scince a selected this course as my
                        bachelorʼs degree because of interest in Information
                        technology,Artificial intelligence and as to improve my
                        knowledge in the field of computer
                      </p>
                    </div>
                  </div>
                  {/* certificate section */}
                  <div className="row">
                    <div className="col-sm-4 mt-1">
                      <h6 className="text-purple-700 border-b-4 border-purple-600 ">
                        <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
                        Certificate:-
                      </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <h5 className=" ">MERN </h5>
                    </div>
                    <div className="col-s9">
                      <p className="text-muted -mt-2 mb-2 ml-2">
                        Dice Academy{" "}
                        <span className="text-muted text-xs">
                          (2022-23/Delhi){" "}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <h5 className="">O-level </h5>
                    </div>
                    <div className="col-s9">
                      <p className="text-muted -mt-2 mb-2 ml-2">
                        NIELIT{" "}
                        <span className="text-muted text-xs">
                          (2019-20/Rohtak){" "}
                        </span>
                      </p>
                      <p className="text-muted -mt-2 mb-2 ml-2">
                        Pursuing this courses to be perfect in using the IT
                        tools and Designing Softwares.
                      </p>
                    </div>
                  </div>

                  {/* skills section */}

                  <div className="row">
                    <div className="col-sm-4 mt-1">
                      <h6 className="text-purple-700 border-b-4 border-purple-600 ">
                        <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
                        Skills:-
                      </h6>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 ml-1">
                        React js
                        <span className="text-muted text-xs">(92%) </span>
                      </h6>
                    </div>
                    <div className="col-sm-9">
                      <h6 className=" ml-32">
                        Scss <span className="text-muted text-xs">(92%) </span>{" "}
                      </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 ml-1">
                        JavaScript
                        <span className="text-muted text-xs">(90%) </span>
                      </h6>
                    </div>
                    <div className="col-sm-9">
                      <h6 className=" ml-32">
                        Wordpress{" "}
                        <span className="text-muted text-xs">(70%) </span>{" "}
                      </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 ml-1">
                        jQuery<span className="text-muted text-xs">(90%) </span>
                      </h6>
                    </div>
                    <div className="col-sm-9">
                      <h6 className=" ml-32">
                        Photoshop
                        <span className="text-muted text-xs">(75%) </span>{" "}
                      </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 ml-1">
                        Tailwind
                        <span className="text-muted text-xs">(90%) </span>
                      </h6>
                    </div>
                    <div className="col-sm-9">
                      <h6 className=" ml-32">
                        Canva<span className="text-muted text-xs">(90%) </span>{" "}
                      </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0 ml-1">
                        Bootstrap
                        <span className="text-muted text-xs">(92%) </span>
                      </h6>
                    </div>
                    <div className="col-sm-9">
                      <h6 className=" ml-32">
                        Figma <span className="text-muted text-xs">(70%) </span>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
library.add(fab, fas, far);
