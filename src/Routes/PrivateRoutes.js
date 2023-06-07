import React from 'react'
import Profile from "../Pages/ProfilePages/Profile"
import { Route, Routes } from 'react-router-dom'
import ToDo from '../Pages/ToDoPages/ToDo'
import OtherProject from '../Pages/OtherPages/OtherProject'
import Nopage from '../Pages/ErrorPage/Error'
import ChartMain from '../Pages/ChartPages/ChartMain'




const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/todo" element={<ToDo/>}/>
        <Route path="/chart" element={<ChartMain/>}/>
        <Route path="/other" element={<OtherProject/>}/>
        <Route path='*' element={<Nopage/>}/>
    </Routes>
  )
}

export default PrivateRoutes