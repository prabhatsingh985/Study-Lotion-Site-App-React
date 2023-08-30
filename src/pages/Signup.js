import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
 
const SignupForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState('student');

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            console.log('password does not match');
            alert('Password does not match');
            return;
        }

        setIsLoggedIn(true);
        console.log('Printing Final account data:');
        console.log(formData);
        navigate('/dashboard');
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f7fafc', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ display: 'flex', backgroundColor: 'grey', padding: '1px', gap: '1rem', margin: '1.5rem 0', borderRadius: '9999px' }}>
                <button style={{ backgroundColor: accountType === 'student' ? '#2d3748' : 'transparent', color: accountType === 'student' ? '#f7fafc' : '#a0aec0', padding: '0.5rem 1rem', borderRadius: '9999px', transition: 'background-color 0.2s, color 0.2s' }} onClick={() => setAccountType('student')}>Student</button>
                <button style={{ backgroundColor: accountType === 'instructor' ? '#2d3748' : 'transparent', color: accountType === 'instructor' ? '#f7fafc' : '#a0aec0', padding: '0.5rem 1rem', borderRadius: '9999px', transition: 'background-color 0.2s, color 0.2s' }} onClick={() => setAccountType('instructor')}>Instructor</button>
            </div>

            <form onSubmit={submitHandler} style={{ width: '100%', maxWidth: '400px', padding: '1rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '20px' }}>

                    <div style={{ width: '100%' }}>
                        <p style={{ fontSize: '0.875rem', color: '#333', marginBottom: '0.5rem', lineHeight: '1.375rem' }}>
                          First Name<sup style={{ color: '#ff69b4' }}>*</sup></p>
                        
                        <input required type="text"
                         name="firstName"
                         onChange={changeHandler} 
                         placeholder="Enter First Name" 
                         value={formData.firstName} 
                         style={{ backgroundColor: 'black',borderWidth:"2px", borderColor: "red", borderRadius: '1.5rem', color: 'white', width: '100%', padding: '12px' }} />

                    </div>

                    <div style={{ width: '100%' }}>
                        <p style={{ fontSize: '0.875rem', color: '#333', marginBottom: '0.5rem', lineHeight: '1.375rem' }}>
                          Last Name<sup style={{ color: '#ff69b4' }}>*</sup></p>

                        <input 
                        required type="text" 
                        name="lastName" 
                        onChange={changeHandler} 
                        placeholder="Enter Last Name" 
                        value={formData.lastName} 
                        style={{ backgroundColor: 'black', borderRadius: '1.5rem', color: 'white', width: '100%', padding: '12px',borderWidth:"2px", borderColor: "red" }} />

                    </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  
                    <div style={{ width: '100%', marginTop: '20px' }}>
                        <p style={{ fontSize: '0.875rem', color: '#333', marginBottom: '0.5rem', lineHeight: '1.375rem' }}>
                          Email Address<sup style={{ color: '#ff69b4' }}>*</sup></p>
                        <input 
                        required type ="email" 
                        name="email" 
                        onChange={changeHandler} 
                        placeholder="Enter Email Address" 
                        value={formData.email} 
                        style={{ backgroundColor: 'black',borderWidth:"2px", borderColor: "red", borderRadius: '1.5rem', color: 'white', width: '100%', padding: '12px' }} />
                    </div>
                </div>


                <div 
                style={{ width: '100%', display: 'flex', gap: '1rem', marginTop: '20px' }}>

                    <div style={{ width: '100%', position: 'relative' }}>

                        <p style={{ fontSize: '0.875rem', color: '#333', marginBottom: '0.5rem', lineHeight: '1.375rem' }}>Create Password<sup style={{ color: '#ff69b4' }}>*</sup></p>
                        <input 
                        required type={showPassword ? 'text' : 'password'} 
                        name="password" 
                        onChange={changeHandler} 
                        placeholder="Enter Password" 
                        value={formData.password} 
                        style={{ backgroundColor: 'black',borderWidth:"2px", borderColor: "red", borderRadius: '1.5rem', color: 'white', width: '100%', padding: '12px' }} 
                        />
                       
                        <span 
                        style={{ position: 'absolute', right: '10px', top: '38px', cursor: 'pointer' }} 
                        onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
                        </span>
                    </div>


                    <div style={{ width: '110%', position: 'relative' }}>
    <p style={{ fontSize: '0.875rem', color: '#333', marginBottom: '0.5rem', lineHeight: '1.375rem' }}>Confirm Password<sup className='text-pink-200'>*</sup></p>
    <input
        required
        type={showConfirmPassword ? 'text' : 'password'}
        name="confirmPassword"
        onChange={changeHandler}
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        style={{ backgroundColor: 'black',borderWidth:"2px", borderColor: "red", borderRadius: '1.5rem', color: 'white', width: '100%', padding: '12px' }}
    />
    <span style={{ position: 'absolute', right: '10px', top: '38px', cursor: 'pointer' }} onClick={() => setShowConfirmPassword((prev) => !prev)}>
        {showConfirmPassword ?
            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
            (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
        }
    </span>
</div>
</div>
<button style={{ width: '100%', backgroundColor: '#ffed4a', borderRadius: '8px', color: 'grey', fontSize: '1rem', fontWeight: 'bold', padding: '8px 12px', marginTop: '1.5rem', cursor: 'pointer' }}>
    Create Account
</button>
</form>
</div>
)
    }

export default SignupForm;