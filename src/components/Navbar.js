import React from 'react'
import {Link} from "react-router-dom"
import { toast } from 'react-hot-toast';
import logo from "./logo.png"

export default function Navbar(props) {
    let isLoggedIn=  props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
   
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to ="/">
        <img src={logo} alt="Logo" width={80} height={100} style={{
          // marginLeft:"10px",
          display:'flex',
          // position:"relative",
          textAlign:"right" ,
         
        }} loading="lazy"/>
      </Link>

      <nav>
        <ul className='text-richblack-100 flex gap-x-6'>
            <li className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                <Link to="/">Home</Link>
            </li>
            <li className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                <Link to="/about">About</Link>
            </li>
            <li className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                <Link to="/contact">Contact</Link>
            </li>
            
        </ul>
      </nav>



      {/* Login   */}
      <div className='flex items-center gap-x-4'>
        {!isLoggedIn && 
         <Link to="/login">
            <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
         </Link>
        }

        {/* SignUp */}
         {!isLoggedIn && 
         <Link to="/signup">
            <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        SignUp
                    </button>
         </Link>
        }


          {/* LogOut */}
         {isLoggedIn && 
         <Link to="/">
            <button onClick={() =>{
            setIsLoggedIn(false);
            toast.success("Logged Out");
        }}
             className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        LogOut
                    </button>
         </Link>
        }

          {/* Dashboard */}
         {isLoggedIn && 
         <Link to="/Dashboard">
            <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
         </Link>
        }


      </div>
    </div>
  )
}
