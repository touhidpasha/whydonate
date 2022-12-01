import React from 'react'
import { useState } from 'react'
import '../css/LoginPage.css'

function LoginPage() {
    const [details,changeDetails]=useState({"email":"",
"password":""})

const getValue=(event)=>{
    changeDetails({...details,[event.target.name]:event.target.value})
    console.log(details);
}
  return (
    <div>
    <h2>LoginPage</h2>
    <input type={"email"} name="email" value={details.email} onChange={getValue}></input>
    <input type={'password'} name="password" value={details.password} onChange={getValue}></input>
    <button>login</button>
    </div>
  )
}

export default LoginPage