import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import '../css/LoginPage.css'

function LoginPage() {
    const [details,changeDetails]=useState({"email":"",
"password":""})

const [regPassword,getRegex]=useState(new RegExp("^[a-zA-Z0-9]{8,16}$"))

const getValue=(event)=>{
    changeDetails({...details,[event.target.name]:event.target.value})
    if(!regPassword.test(details.password))
    console.log("invalid pass");
    // alert("password must be only alphaNumeric")
    console.log(details);

}

const verifyData=()=>{
    axios.put("URL",{data:details})

}
  return (
    <div>
    <h2>LoginPage</h2>
    <input type={"email"} name="email" value={details.email} onChange={getValue}></input>
    <input type={'password'} name="password" value={details.password} onChange={getValue}></input>
    <button onClick={verifyData}>login</button>
    </div>
  )
}

export default LoginPage