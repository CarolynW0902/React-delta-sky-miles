import React, { useState } from "react";
import { Link } from "react-router-dom";


function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];

    if (!firstName.trim()) newErrors.push("First Name is required.");
    if (!lastName.trim()) newErrors.push("Last Name is required.");
    if (!email.trim()) newErrors.push("Email is required.");
    if (!password) newErrors.push("Password is required.");
    if (password !== reenterPassword) newErrors.push("Passwords do not match.");

    if (newErrors.length > 0) {
      setErrorMsg(newErrors.join(" "));
    }else {
       setErrorMsg([]);
       //Save user data to localStorage for login later
       const newUser = {firstName, lastName, email, password};
       localStorage.setItem("user", JSON.stringify(newUser));
       alert("Signup successful! You can now log in.");
    }
  }


    return (
      <div id="wrapper">
      <h1>Signup</h1>

      {/*Show error msgs */}

      {errorMsg.length > 0 && (
        <div id="errorMsg">
          {errorMsg.map((err, i) => (
            <p key={i}>{err}</p>
          ))}
        </div>
      )}

      <form id="form" onSubmit={handleSubmit}>

        <div>
          <label for="firstName"> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path
                d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"
              />
            </svg>
          </label>
          <input type="text" id="firstName" name="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>

        <div>
          <label for="lastName">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path
                d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"
              />
            </svg>
          </label>
          <input type="text" id="lastName" name="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </div>
        
        <div>
          <label for="email">@</label>
          <input type="email" id="signupEmail" name="signupEmail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div>
          <label for="password">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path
                d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z"
              />
            </svg>
          </label>
          <input type="password" id="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div>
          <label for="reenterPassword">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path
                d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z"
              />
            </svg>
          </label>
          <input type="password" id="reenterPassword" placeholder="Re-Enter Password" value={reenterPassword} onChange={(e) => setReenterPassword(e.target.value)}/>
        </div>
       
        <button type="submit" id="signupBtn">SignUp</button>
      </form>

      <p>Already have an Account? <Link to="/login">Login</Link></p>
    </div>

    );
}

export default Signup;