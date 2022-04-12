import React, { useState } from "react";
import "./AuthForm.css";
import GoogleLogo from "../../Assets/Image/google.svg";
import { useNavigate } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";

const Login = () => {

  const navigate = useNavigate();
  const { signInWithGoogle, login } = useFirebase();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = event => {
    const email = event.target.value;
    setEmail(email);
  }

  const handlePassword = event => {
    const password = event.target.value;
    setPassword(password);
  }

  const handleLogIn = () => {
    login(email, password);
  }

  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Login</h1>
        <form onSubmit={event => event.preventDefault()}>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input onChange={handleEmail} type='text' name='email' id='email' />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input onChange={handlePassword} type='password' name='password' id='password' />
            </div>
          </div>
          <button
            type='submit'
            className='auth-form-submit'
            onClick={handleLogIn}
          >
            Login
          </button>
        </form>
        <p className='redirect'>
          New to Tech Geeks?{" "}
          <span onClick={() => navigate("/signup")}>Create New Account</span>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button onClick={signInWithGoogle} className='google-auth'>
            <img src={GoogleLogo} alt='' />
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
