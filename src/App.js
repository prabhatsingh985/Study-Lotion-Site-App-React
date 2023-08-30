import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import { useEffect, useState } from 'react'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About";
import Contact from "./pages/Contact";
 
  function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bg, setbg] = useState("white");
  const [curr , setcurr] =  useState('enable');

  //  function changecolor(){
  //   if(bg == 'pink') setbg("white");
  //   else setbg("pink")
  //    if(curr == "enable") setcurr("disable")
  //   else setcurr("enable")
  //   }
 

  return (

    <div style={{
      backgroundColor:bg
    }} 
    >
     <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
       <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
      
      {/* <button  onClick={changecolor} style={{
        border:"2px solid red"
      }}>
        {curr} mode
         </button> */}
    </div>
  );
}

export default App;
