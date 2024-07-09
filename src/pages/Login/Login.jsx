import React, {useEffect, useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { loginAsync, clearLog } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";



export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {isAuthenticated, data, error, errorMessage, loading} = useSelector(state=>state.auth)
  
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    if(errorMessage && error){
      toast.error(errorMessage)
      dispatch(clearLog())
   }
  }, [error, errorMessage])

  useEffect(()=>{
    if(data && isAuthenticated){
      localStorage.setItem('token', data.accessToken)
      //toast.success('Logged in successfully')
      navigate('/')

     
    }
  }, [data, isAuthenticated])

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(email.length !== 0 && password.length !== 0){
      dispatch(loginAsync({email, password}))
      
    }

  }
  return (
    <div className="login container">
      <div className="login-card">
        <div className="login-top">
          <div className="login-header">
            <h1>Login</h1>
          </div>
          <div className="login-top-btn">
            <button className="login-top-button"><span><FaGoogle size={14}/></span> Login with Google</button>
          </div>
          <div className="login-top-text">
            <div className="login-line"></div>
            <div>or login with email</div>
            <div className="login-line"></div>
          </div>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="" className="login-label">Email</label>
            <br />
            <input type="email" name="" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="" />
          </div>
          <div className="input-field">
            <label htmlFor="" className="login-label">Password</label>
            <br />
            <input type="password" name="" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="" />
          </div>
          <div className="input-field">
            <Link className="forgot-password">Forgot Password?</Link>
          </div>
          <div className="input-field">
            <button type="submit" className="login-btn">
              Continue
            </button>
          </div>
          <div className="input-field">
            <div className="login-text">
              Rate My Professors is designed for and targeted to U.S. audiences
              and is governed by and operated in accordance with U.S. laws.
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
