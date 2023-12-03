import React from "react";
import jio_img from "../../assets/Login/jio_dan_dana_dan.webp";
import styles from "./Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {signin,signin_G} from "../../redux/Login_store/action"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


function Login_jio() {
  let [email, setEmail] = React.useState();
  let [password, setPassword] = React.useState();

  let dispatch = useDispatch();

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(signin(email,password))
  };

  const handleGoogleAuth = () => {
    dispatch(signin_G())
  }

  return (
    <div className={styles.Login_container}>
      <div className={styles.jio_img}>
        <img
          src={jio_img}
          alt=""
        />
      </div>
      <div className={styles.Input_form}>
        <h2 style={{ fontWeight: "600" }}>Sign in to JioMart</h2>
        <p style={{ opacity: 0.7 }}>
          To access your Addresses, Orders & WishList
        </p>
        <br />
        <form onSubmit={handleSignIn}>
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
            className={styles.login_btn}
          >
            Login
          </button>
        </form>
        <br />
        <br />
        <span className={styles.line}></span>
        <span> or </span>
        <span className={styles.line}></span>
        <br />
        <br />
        <button onClick={handleGoogleAuth} className={styles.login_btn}>
          <FontAwesomeIcon
            icon={faGoogle}
            shake
          /> &nbsp;Login using Google
        </button>
        <br />
        <br />
        <p>Create an Account <Link to={"/signup"}>Signup</Link></p>
      </div>
    </div>
  );
}

export default Login_jio;
