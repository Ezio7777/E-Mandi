import React, { useState } from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = ({ loadUser, onRouteChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const onSubmitSignUp = async () => {
    const response = await fetch("http://localhost:4000/api/auth/createuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      handleClick();
    } else if (json === "Exist") {
      Swal.fire({
        icon: "warning",
        title: "User ALready Exist",
        text: "",
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Invalid Credentials",
        text: "",
      });
    }
  };
  return (
    <div className="container whole-body">
      <div className="form-container">
        <p className="title">SignUp</p>
        <div className="input-group">
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder=""
            onChange={onNameChange}
          />
        </div>
        <div className="input-group">
          <label for="email">Email</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder=""
            onChange={onEmailChange}
          />
        </div>
        <div className="input-group">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder=""
            onChange={onPasswordChange}
          />
        </div>

        <button className="sign" onClick={onSubmitSignUp}>
          SignUp
        </button>
        <p className="signup">
          Already have an account?
          <Link rel="noopener noreferrer" to="/login" class="">
            {" "}
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
