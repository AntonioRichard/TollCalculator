import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = (props)=> (
<form>
<div className='container-register'>
  <h1>Register</h1>
  <input type="text" placeholder="Enter Username" id="username" maxLength="15" name="test" required />
  <input type='email' placeholder="Enter Email" id="email" maxLength="40" required/>
  <input
  type="password"
  placeholder="Enter Password" 
  id="password" 
  maxLength="15" required/>
  <input type='password' placeholder="Confirm Password" id="confirmPassword" maxLength="15" required/>
  <div className="error__container">
  <p id="errorMessage"></p>
  </div>
  <button 
  type="submit"
  className="login-btn" 
  onClick={props.handleRegister}
  >Register
  </button>
  <p>Already have an account?<Link className="login__a" to="/login"> Login</Link></p>
</div>
</form>
);

export default RegisterForm;