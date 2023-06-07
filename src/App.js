import './App.css';
import { ToastContainer } from 'react-toastify';
import React, { useEffect } from 'react'
import "react-toastify/dist/ReactToastify.css";
import'../node_modules/bootstrap/dist/css/bootstrap.min.css'
import DashboardMain from './DashboardLayout/DashboardMain'; 
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import Login from './LoginPage/Login';
import Register from './LoginPage/Register'



function App() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "" || location.pathname === "/") {
      navigate("/login");
    }
  }, []);


  const gotoLogin = () => {
    return (
      <Routes>
       <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    );
  };

  return (
    <>
     {
        location.pathname === "" ||
          location.pathname === "/login" ||
          location.pathname === "/register" ||
          location.pathname === "/" ? (
          gotoLogin()
        ) :
        <DashboardMain/>   

      }

   <ToastContainer />

    </>
  );
}

export default App;
