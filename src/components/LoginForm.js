import React from "react";
import { Link } from "react-router-dom";

const LoginForm = (props)=> (
    <form>
    <div className='container'>
       <h1>Login</h1>
       <input type="text" placeholder="Enter Username" id="username" required/>
       <input type='password' placeholder="Enter Password" id="password" required/>
       <p id="errorMessage"></p>
       <button className="login-btn" type="submit" onClick={props.handleLogin}>Login</button>
       <Link className="login__a" href="#">Forgot password?</Link>
       <p>Not registered yet?<Link className="login__a" to="/register"> Sign up now</Link></p>
    </div>
   </form>
);

export default LoginForm;