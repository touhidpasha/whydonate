import React from "react";
import { useState ,useEffect} from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import "../css/LoginPage.css";

function LoginPage(props) {
  const [details, changeDetails] = useState({ email: "", password: "" });
  const [verifiedUser,changeVerifiendUser]=useState(false)

  const [regPassword, getRegex] = useState(new RegExp("^[a-zA-Z0-9]{8,16}$"));
  const URL = "http://localhost:5000/";

  const getValue = (event) => {
    changeDetails({ ...details, [event.target.name]: event.target.value });
    if (!regPassword.test(details.password)) console.log("invalid pass");
    // alert("password must be only alphaNumeric")
    console.log(details);
  };

  const verifyData = async () => {
    try {
      const res = await axios.get(URL + "login", {
        params: { email: details.email, password: details.password },
      });
      console.log(res);
      if (res.status == 200) changeVerifiendUser(true);
    } catch (e) {
      console.log(e);
    }
  };
  if(verifiedUser)
    return <Navigate to="/searchpage" />
  return (
    <div>
      <h2>LoginPage</h2>
      <input
        placeholder="email"
        type={"email"}
        name="email"
        value={details.email}
        onChange={getValue}
      ></input>
      <input
        placeholder="password"
        type={"password"}
        name="password"
        value={details.password}
        onChange={getValue}
      ></input>
      <button onClick={verifyData}>login</button>
    </div>
  );
}

export default LoginPage;
