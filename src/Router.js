import React from 'react'
import {BrowserRouter , Route, Routes,Navigate} from "react-router-dom";
import Login from './Login';
import Body from './Body';
import Home from './Home';
import Form from './Form';
import Fav from './Fav';



const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
      <Route path='/fav' element={<Fav/>}></Route>
       {/* <Route path='/body' element={<Body/>}></Route> */}
      {/* <Route path='/home' element={<Home/>}></Route>*/}
      {/* <Route path='*' element={<Navigate to='/Login'></Navigate>}></Route> */}
    </Routes>
    </BrowserRouter>
  )
}

export default Router
