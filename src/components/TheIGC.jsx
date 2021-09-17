import React, { useState, useEffect } from "react";
import "../css/Header.css";
import { useHistory } from "react-router";
import axios from "axios";
import useLocalStorage from "react-use-localstorage";
// import use auth
import { useAuth } from "../Context/AuthContext";
// import use auth
import firebase, { auth, db, storage } from "../firebase";

function Header() {
  // get firebase users from useauth
  const { user, logOut, uploadData, loggedIn, setLoggedIn } = useAuth();
  // get firebase users from useauth

  // state for mongo user
  const [mongoUser, setMongoUser] = useState([]);
  // state for mongo user
  const history = useHistory();

  const handleLogOut = async () => {
    //setError('') - Suniel, remember to set this state.

    // try {
    //   await logOut();
    //   history.push("/");
    //   db.collection("Users")
    //     .where("pin", "==", users.pin)
    //     .get()
    //     .then((querySnapshot) => {
    //       querySnapshot.docs[0].ref.update({
    //         onlineStatus: "#FF0000",
    //       });
    //     })
    //     .then(setLoggedIn(false));
    // } catch {
    //   //setError - Suniel, remember to set this state.
    // }
  };

  // Get request to get a specific user's IGC and display it in the header
  const getMongoUsers = async () => {
    await axios
      .get(`https://majesticserver.herokuapp.com/user/${localStorage.getItem('userOBJ')}`)
      .then((response) => {
        setMongoUser(response.data);
      });
  };

  useEffect(() => {
    getMongoUsers();
  }, []);
  // Get request to get a specific user's IGC and display it in the header

  console.log(mongoUser);

  return (
    <div className="igc">
   
      <div className="tokens">
      <p>Welcome: <span className="highlight">{mongoUser.name}</span></p>
     
       <p> <span className="red">Balance:</span><span className="highlight"> {mongoUser.igc}</span></p>
      </div>
    </div>
  );
}

export default Header;
