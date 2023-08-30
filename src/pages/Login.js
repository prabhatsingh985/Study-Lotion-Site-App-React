import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


   

    const [showPassword, setShowPassword] = useState(false);
  
    
    function changeHandler(event) {
        var x = document.getElementById("myDIV");
        // console.log(formData.email ,formData.password)
        if (formData.email !=  '' && formData.password.length  >= 7) {
          x.style.display = "block";
        } else  x.style.display = "none";

        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
          
             
        })
        );
     }

  
    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("Yeah buddu")
        console.log(formData);
        navigate('/Dashboard');
    }

    return (
        
        <form
            onSubmit={submitHandler}
            style={{ 
               width: '100%',
             maxWidth: '400px',
            padding: '1rem',
             borderRadius: '8px', 
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',  
            backgroundColor: '#f7fafc', 
            fontFamily: 'Arial, sans-serif',
            margin: "auto auto",
            marginTop:"100px"
             }}>
            <div style={{ width: '100%' }}>
                <p style={{ fontSize: '0.875rem', color: '#333', marginBottom: '0.5rem', lineHeight: '1.375rem' }}>
                    Email Address<sup style={{ color: 'red' }}>*</sup>
                </p>
                <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter email address"
                    name="email"
                    style={{ backgroundColor: 'black', borderRadius: '1.5rem', color: 'white', width: '100%', padding: '12px', borderWidth:"2px", borderColor: "red"}}
                />
            </div>

            <div style={{ width: '100%', position: 'relative' }}>
                <p style={{ fontSize: '0.875rem', color: '#333', marginBottom: '0.5rem', lineHeight: '1.375rem' }}>
                    Password<sup style={{ color: 'red' }}>*</sup>
                </p>
                <input
                    required
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    name="password"
                    style={{ backgroundColor: 'black', borderRadius: '1.5rem', color: 'white', width: '100%', padding: '12px',borderWidth:"2px", borderColor: "red" }}
                />
                <span
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '38px',
                        cursor: 'pointer',
                    }}
                    onClick={() => setShowPassword((prev) => !prev)}
                >
                    {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
                </span>

                <Link to="#">
                    <p style={{ fontSize: '0.75rem', color: '#69b4ff', marginTop: '0.25rem', maxWidth: 'max-content', marginLeft: 'auto' }}>
                        Forgot Password
                    </p>
                </Link>
            </div>

              {
                // (formData.email != '' && formData.password.length >= 8) ? 
            <button id  = "myDIV"

                 type="submit"
                 style={{
                    display:"none",
                    backgroundColor: '#f6e05e',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    padding: '8px 12px',
                    marginTop: '1.5rem',
                }}
            >
                Sign In
            </button>
          
                  }

        </form>
    );
};

export default LoginForm;
