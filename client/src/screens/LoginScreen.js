import React, {useState, useEffect} from "react";
import {useDispatch , useSelector} from 'react-redux'
import { loginUsers } from "../actions/userActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";

export default function LoginScreen(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.loginUserReducer)
    const {loading, error} = loginState;

useEffect (() => {
    if(localStorage.getItem('currentUser')){
      window.location.href='/'
    }

}, [])


        function login(){
            const user={email , password}
            dispatch(loginUsers(user))
        }
    

    return (
        <div>
        <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-start shadow-lg w-50 p-3 mb-5 bg-white rounded">
        <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
          Login
        </h2>
        {loading && (<Loading/>)} 
        {error && (<Error error='Invalid Credentials'/>)}
        <div>
          <input
            required
            type="text"
            placeholder="email"
            className="form-control"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <input
            type="text"
            placeholder="password"
            className="form-control"
            required
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <button onClick={login} className="btn mt-3 mb-3">Login</button>
          <br />
          <a style={{ color: "black" }} href="/register">
            Click Here To Register
          </a>
        </div>
      </div>
    </div>
        </div>
    )
} 