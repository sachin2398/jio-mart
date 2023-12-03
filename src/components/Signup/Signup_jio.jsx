// import React from "react";
import jio_img from "../../assets/Login/jio_dan_dana_dan.webp";
import styles from "./signup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/Signup_store/action";
import { signin_G } from "../../redux/Login_store/action";

function Signup_jio() {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [userName, setUserName] = useState();
  let dispatch = useDispatch();
  let isauth = useSelector((store) => store.login_reducer.isAuth);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signup(email, password, userName));
  };

  const handleGoogleAuth = () => {
    dispatch(signin_G());
  };

  if (isauth) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className={styles.Signup_container}>
      <div className={styles.Input_form}>
        <h2 style={{ fontWeight: "600" }}>SignUp to JioMart</h2>
        <p style={{ opacity: 0.7 }}>
          To access your Addresses, Orders & WishList
        </p>
        <br />
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className={styles.input_feild}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className={styles.input_feild}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className={styles.input_feild}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button
            type="submit"
            className={styles.signup_btn}
          >
            Signup
          </button>
        </form>
        <br />
        <br />
        <span className={styles.line}></span>
        <span> or </span>
        <span className={styles.line}></span>
        <br />
        <br />
        <button
          onClick={handleGoogleAuth}
          className={styles.signup_btn}
        >
          <FontAwesomeIcon
            icon={faGoogle}
            shake
          />{" "}
          Signup using Google
        </button>
        <br />
        <br />
        <p>
          Already have an Account <Link to={"/login"}>Login</Link>
        </p>
      </div>
      <div className={styles.jio_img}>
        <img
          src={jio_img}
          alt=""
        />
      </div>
    </div>
  );
}

export default Signup_jio;
