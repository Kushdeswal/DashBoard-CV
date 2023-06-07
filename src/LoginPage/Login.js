import React, { useEffect, useState } from "react";
// import login from "../../images/pic.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function Login() {
  const navigate = useNavigate();

  const [show, setshow] = useState(false)
  const URLpath ="http://localhost:4400/user_data/"  ;
  const [loginData, setloginData] = useState([]);
  useEffect(() => {
    axios
      .get(URLpath)
      .then((res) => setloginData(res.data))
      .catch((err) => {});
  }, []);

  const userValue = {
    userName: "",
    password: "",
  };
  const loginSchema = Yup.object({
    userName: Yup.string().required("Please enter your user name"),
    password: Yup.string().required("Please enter your password"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: userValue,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        let Data = loginData.filter(
          (items) =>
            items.userName === values.userName &&
            items.password === values.password
        );
        if (Data.length > 0) {
          navigate("/profile");   

          localStorage.setItem('token','token');

          toast.success(
            "Login " +
              Data.map((item) => {
                return item.userName;
              })
          );
        } else {
          toast.error("user not found");
        }
      },
    });

  return (
    <>
      <div className=" min-h-screen flex items-center justify-center">
        <div className="sm:w-3/4 h-full lg:h-[620px] bg-purple-700 flex flex-wrap shadow-lg shadow-purple-300 overflow-hidden md:rounded-lg ">
          <div className="md:w-4/12 md:h-full">
          <div className="w-full h-full ">
              <img
                src="https://imgs.search.brave.com/2LLFK-FXXcDKj9kORVCRHzQAGC1vEKKXcIdTaIE8edU/rs:fit:512:512:1/g:ce/aHR0cDovL3d3dy5j/bGlwYXJ0YmVzdC5j/b20vY2xpcGFydHMv/OWlSL0x5RS85aVJM/eUViUlQuZ2lm.gif"
                alt=""
              />
              <div className="text-purple-300 ml-12">
              <h2>Welcome !</h2>
          <p>
            To keep connented with <br /> my Portfolio please Login <br />  with your
            personal info .
          </p>
              </div>
            </div>
          </div>

          <div className="md:w-8/12 md:h-full bg-purple-100 py-10">
            <div className="w-11/12 sm:w-7/12 mx-auto">
              <div>
                <p className="text-4xl">Login to be a part of Awesomeness!</p>
              </div>

              <div className="mt-5">
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                    <label htmlFor="userName" className="text-lg">
                      User ID
                    </label>
                    <input
                      type="text"
                      name="userName"
                      id="userName"
                      placeholder="Kush"
                      value={values.userName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-transparent border-b-2 border-purple-800 py-1 outline-none text-base"
                    />
                    {errors.userName && touched.userName && (
                      <p className="text-sm text-red-800">{errors.userName}</p>
                    )}
                  </div>
                  <div className="flex flex-col relative">
                    <label htmlFor="password" className="text-lg">
                      Password
                    </label>
                    <input
                      type={show?'text':'password'}
                      name="password"
                      id="password"
                      placeholder="Kush@123"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-transparent border-b-2 border-purple-800 py-1 outline-none text-base "
                    />
                    <div className="w-8 h-8 absolute bottom-0.5 right-0 flex items-center justify-center">
                      <div className="cursor-pointer" onClick={()=>setshow(!show)}>
                      {show?<FontAwesomeIcon icon="fa-solid fa-eye-slash" />:<FontAwesomeIcon icon="fa-solid fa-eye" />}
                      </div>
                    </div>
                  </div>
                  {errors.password && touched.password && (
                    <p className="text-sm text-red-800 -mt-3">
                      {errors.password}
                    </p>
                  )}

                  <button
                    className="bg-purple-800 px-4 py-1 text-lg font-medium text-white"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </div>

              <div className="mt-3">
                <p>
                  Don't have an account?{" "}
                  <span
                    className="cursor-pointer text-purple-800"
                    onClick={() => navigate("/register")}
                  >
                    Sign Up
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

export default Login;
library.add(fab, fas, far)