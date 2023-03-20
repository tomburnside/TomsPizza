import React, {useState, useEffect} from "react";
import {useDispatch , useSelector} from 'react-redux'
import { registerUsers } from "../actions/userActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Success from '../Components/Success';

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');
    const dispatch = useDispatch();
    const registerstate = useSelector(state =>state.registerUserReducer)
    const {error , loading , success} = registerstate

    

    function register(){

        if(password!=cpassword)
        {
            alert("passwords not matched")
        }
        else{
            const user={
                name,
                email,
                password
            }
            console.log(user)
            dispatch(registerUsers(user))
        }
  
    }

    return (
    <div className="register">
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-start shadow-lg w-50 p-3 mb-5 bg-white rounded">

        {loading && (<Loading/>)}
        {success && (<Success success='User Registered Successfully' />)}
        {error && (<Error error='Email already registred' />)}

        <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
          Register
        </h2>
        <div>
          <input
            required
            type="text"
            placeholder="name"
            className="form-control"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
/>
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
          <input
            type="text"
            placeholder="confirm password"
            className="form-control"
            required
            value={cpassword}
            onChange={(e)=>{setcPassword(e.target.value)}}
          />
          <button onClick={register} className="btn mt-3 mb-3">REGISTER</button>
          <br />
          <a style={{ color: "black" }} href="/login">
            Click Here To Login
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
