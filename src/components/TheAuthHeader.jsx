import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logo.svg";
import "../css/theauthheader.css";
import "../css/theheader.css";
import React, { useState, useEffect } from "react";

import { useHistory } from "react-router";
import axios from "axios";
import useLocalStorage from "react-use-localstorage";
// import use auth
import { useAuth } from "../Context/AuthContext";
// import use auth
import firebase, { auth, db, storage } from "../firebase";

function TheAuthHeader() {
  // get firebase users from useauth
  let { users, user, logOut, uploadData, loggedIn, setLoggedIn } = useAuth();
  // get firebase users from useauth

  // state for mongo user
  const [mongoUser, setMongoUser] = useState([]);
  // state for mongo user
  const history = useHistory();

  const handleLogOut = async () => {
    //setError('') - Suniel, remember to set this state.w
    // history.push('/')
    //  localStorage.removeItem("authToken");
    //  localStorage.removeItem("userOBJ");
    logOut();
  };

  // Get request to get a specific user's IGC and display it in the header
  // const getMongoUsers = async () => {
  //   await axios
  //     .get(`https://majesticserver.herokuapp.com/user/${users.mong_id}`)
  //     .then((response) => {
  //       setMongoUser(response.data);
  //     });
  // };

  useEffect(() => {
    // getMongoUsers();
  }, []);
  // Get request to get a specific user's IGC and display it in the header

  console.log(`The mongo user: ${users}`);

  return (
    <div>
      {localStorage.getItem("authToken") ? (
        <div className="about-nav">
          <header className="auth-landingPage-header">
            <Link to="/">
              <Logo className="landingPage-logo" />
            </Link>

            <div className="links-container">
              {" "}
              <Link to="/">Home </Link> <Link to="/about">About </Link>{" "}
              <Link to="/game-updates">Game Updates </Link>{" "}
              <Link to="/games">Games </Link>
                <button className="logout_btn" onClick={handleLogOut}>
                  Logout
                </button>
            </div>
          </header>{" "}
        </div>
      ) : (
        <div className="about-nav">
          <header className="landingPage-header">
            <Link to="/">
              <Logo className="landingPage-logo" />
          
            </Link>
    
            <div className="links-container">
              {" "}
              <Link to="/">Home </Link>
              <Link to="/games">Games </Link>
              <Link to="/about">About Us</Link>{" "}
   {/*            <Link to="/game-updates">Game Updates </Link> */}
              <Link to="/login">Login </Link>{" "}
              <Link to="/games">
                <button className="landingPage-sign-up-button">PLAY NOW</button>{" "}
              </Link>
            </div>
          </header>
        </div>
      )}
    </div>
  );
}

export default TheAuthHeader;
