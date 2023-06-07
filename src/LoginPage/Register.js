import React, { useEffect, useState } from "react";
// import register from '../../images/pic.png'
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

function Registration() {
  const navigate = useNavigate();
  const URLpath = "http://localhost:4400/user_data/";
  const [show, setshow] = useState(false);
  const [reshow, setreshow] = useState(false);
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(URLpath)
      .then((res) => setData(res.data))
      .catch((err) => {});
  }, []);

  const emailData = Data.map((items) => {
    return items.email;
  });
  const userData = Data.map((items) => {
    return items.userName;
  });

  const initialvalue = {
    userName: "",
    email: "",
    password: "",
    repassword: "",
  };
  const signUpSchema = Yup.object({
    userName: Yup.string()
      .min(2)
      .max(25)
      .notOneOf(userData, "User ID already taken")
      .required("Please enter your user name"),
    email: Yup.string()
      .email()
      .notOneOf(emailData, "Email already taken")
      .required("Please enter your email"),
    password: Yup.string()
      .required("Please enter your password")
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    repassword: Yup.string()
      .required("Please enter your password")
      .oneOf([Yup.ref("password"), null], "Password not match"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialvalue,
      validationSchema: signUpSchema,
      onSubmit: (values, actions) => {
        axios
          .post(URLpath, values)
          .then((res) => {
            actions.resetForm();
            toast.success("Registerd Successfully");
            navigate("/login");
          })
          .catch((err) => toast.error("Connection error!"));
      },
    });

  return (
    <>
      <div className=" min-h-screen flex items-center justify-center">
        <div className="sm:w-3/4 h-full lg:h-[676px] bg-purple-700 flex flex-wrap shadow-lg shadow-purple-300 overflow-hidden md:rounded-lg ">
          <div className="md:w-4/12 md:h-full">
            <div className="w-full h-full ">
              <img
                src="https://imgs.search.brave.com/2LLFK-FXXcDKj9kORVCRHzQAGC1vEKKXcIdTaIE8edU/rs:fit:512:512:1/g:ce/aHR0cDovL3d3dy5j/bGlwYXJ0YmVzdC5j/b20vY2xpcGFydHMv/OWlSL0x5RS85aVJM/eUViUlQuZ2lm.gif"
                alt=""
              />
              <div className="text-purple-300 ml-12">
              <h2>Welcome !</h2>
          <p>
            To keep connented with <br />  my Portfolio please SignUp <br /> with your 
            personal info .
          </p>
              </div>
            </div>
          </div>

          <div className="md:w-8/12 md:h-full bg-purple-100 py-5">
            <div className="w-11/12 sm:w-7/12 mx-auto">
              <div>
                <p className="text-4xl">Sign up to be a part of Awesomeness!</p>
              </div>

              <div className="mt-3">
                <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                    <label htmlFor="userName" className="text-lg">
                      User ID
                    </label>
                    <input
                      type="text"
                      name="userName"
                      id="userName"
                      value={values.userName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-transparent border-b-2 border-purple-800 -py-2 outline-none text-base"
                    />
                    {errors.userName && touched.userName && (
                      <p className="text-sm text-red-800">{errors.userName}</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-lg">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-transparent border-b-2 border-purple-800 -py-2 outline-none text-base"
                    />
                    {errors.email && touched.email && (
                      <p className="text-sm text-red-800">{errors.email}</p>
                    )}
                  </div>
                  <div className="flex flex-col relative">
                    <label htmlFor="password" className="text-lg">
                      Password
                    </label>
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-transparent border-b-2 border-purple-800 -py-2 outline-none text-base"
                    />
                    <div className="w-8 h-8 absolute bottom-0.5 right-0 flex items-center justify-center">
                      <div
                        className="cursor-pointer"
                        onClick={() => setshow(!show)}
                      >
                        {show ? (
                          <FontAwesomeIcon icon="fa-solid fa-eye-slash" />
                        ) : (
                          <FontAwesomeIcon icon="fa-solid fa-eye" />
                        )}
                      </div>
                    </div>
                  </div>
                  {errors.password && touched.password && (
                    <p className="text-sm text-red-800 -mt-1">
                      {errors.password}
                    </p>
                  )}

                  <div className="flex flex-col relative ">
                    <label htmlFor="repassword" className="text-lg">
                      Repeat Password
                    </label>
                    <input
                      type={reshow ? "text" : "password"}
                      name="repassword"
                      id="repassword"
                      value={values.repassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-transparent border-b-2 border-purple-800 --py-2 outline-none text-base"
                    />
                    <div className="w-8 h-8 absolute bottom-0.5 right-0 flex items-center justify-center">
                      <div
                        className="cursor-pointer"
                        onClick={() => setreshow(!reshow)}
                      >
                        {reshow ? (
                          <FontAwesomeIcon icon="fa-solid fa-eye-slash" />
                        ) : (
                          <FontAwesomeIcon icon="fa-solid fa-eye" />
                        )}
                      </div>
                    </div>
                  </div>
                  {errors.repassword && touched.repassword && (
                    <p className="text-sm text-red-800 -mt-1">
                      {errors.repassword}
                    </p>
                  )}

                  <button
                    className="bg-purple-800 px-4 py-1 mt-1 text-lg font-medium text-white"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </form>
              </div>

              <div className="mt-2">
                <p>
                  Have an account?{" "}
                  <span
                    className="text-purple-800 cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
library.add(fab, fas, far);
