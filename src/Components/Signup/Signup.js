import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../Assets/Image/google.svg";
import useFirebase from "../Hooks/useFirebase";

const Signup = () => {

  const { signInWithGoogle, signUpWithEmailPassword } = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confiormPassword, setConfiormPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmail = event => {
    const email = event.target.value;
    setEmail(email);
  }

  const handlePassword = event => {
    const password = event.target.value;
    setPassword(password);
  }

  const handleConfiormPassword = event => {
    const confiormPassword = event.target.value;
    setConfiormPassword(confiormPassword);
  }

  const handleFormContainer = (event) => {
    event.preventDefault();
  }

  const handleLogin = () => {
    if (password.length < 6) {
      setError('password must be 6 carecter!')
    }
    else if (password !== confiormPassword) {
      setError('Password not match!')
    }

    else {
      signUpWithEmailPassword(email, password)
      setError('')
    }
  }

  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Sign Up</h1>
        <form onSubmit={handleFormContainer}>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input
                onChange={handleEmail}
                type='email'
                name='email'
                id='email'
                required />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input
                onChange={handlePassword}
                type='password'
                name='password'
                id='password'
                required />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <div className='input-wrapper'>
              <input
                onChange={handleConfiormPassword}
                type='password'
                name='confirmPassword'
                id='confirm-password'
                required
              />
            </div>

            <p style={{ color: 'red' }}>{error}</p>

          </div>
          <button
            onClick={handleLogin}
            type='submit'
            className='auth-form-submit'>
            Sign Up
          </button>
        </form>
        <p className='redirect'>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
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

export default Signup;
