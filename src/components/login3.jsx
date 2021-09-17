import { useEffect, useState, Fragment } from "react";
import uniqueRandom from 'unique-random';
import { useHistory } from "react-router";
import { useAuth } from "../Context/AuthContext";
import "../css/login3.css";
import axios from "axios";

import TheBackgroundMusic from "../components/theBackgroundMusic";
import firebase, { db, storage } from "../firebase";

import useLocalStorage from "react-use-localstorage";
import { useLocation } from "react-router-dom";

// import firebase from '../firebase';

function Login3() {
  const location = useLocation();
  //signup credentials
  const [email, setEmail] = useState();
  const [online, setOnline] = useState("Offline");
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [pin, setPin] = useLocalStorage("pin", "");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const { login, users, currentUser, uploadData, firestoreLogin, ImageUpload } =
    useAuth();
  const [loading, setLoading] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);
  // signup credentials

  let history = useHistory();

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // if(location.pathname === "/login"){
  //   console.log('Offlne')
  // }else{
  //   console.log('ONline')
  // }

  // if(location.pathname === "/"){
  //   console.log('Offlne')
  // }

  const handleDataUpload = () => {
    if (email === "") {
      console.log("Email feild cannot be empty");
      alert("Please enter an email!");
    } else if (name === "") {
      console.log("Please enter your name");
      alert("Please enter your name!");
    } else if (phoneNumber === "") {
      console.log("Please enter a phone number");
      alert("Please enter a phone number!");
    } else if (address === "") {
      console.log("Please enter a valid address");
      alert("Please enter a valid address!");
    } else if (image === null) {
      console.log("Please upload a valid ID picture");
      alert("Please upload a valid ID picture!");
    } else {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              db.collection("UnauthenticatedUsers").add({
                address: address,
                email: email,
                imageUrl: url,
                phone: phoneNumber,
                name: name,
              });
            });
        }
      );
      // alert.success("Data uploaded");
    }
  };

  const createMongoUser = async () => {
    const loggedUser = {
      name: name,
      email: email,
      pin: random().toString(),
      phone: phoneNumber,
      image_url: 'image',
      address: address,
      igc: '0',
      online_status: '#FF0000',
    };

    await axios
      .post(`https://majestic-express-server.herokuapp.com/api/auth/register`, loggedUser)
      // .post(`http://localhost:5000/api/auth/register`, loggedUser)
      .then((res) => {
        localStorage.setItem("authToken", user.token)
        if(localStorage.getItem('authToken')){
          // navigate('/  app/dashboard', { replace: true });
          history.push('/games')
          console.log('test')
          // console.log('hey')
        }
      })
      .catch((err) => console.log(err.message));
  };

  useAuth(() => {
    
  })

  const handleMongoLogin = async () => {
    login(email, pin)
    // const LoginCred = {
    //   email: email,
    //   pin: pin,
    // };

    // let logged_in_user = '';

    // await axios
    //   .post(`https://majestic-express-server.herokuapp.com/api/auth/login`, LoginCred)
    //   // .post(`http://localhost:5000/api/auth/login`, LoginCred)
    //   .then((res) => {
    //     console.log(res.data)
    //     logged_in_user = res.data
    //     console.log(logged_in_user)
    //     localStorage.setItem("authToken", res.data.token)
    //       if(localStorage.getItem('authToken')){
    //         // navigate('/  app/dashboard', { replace: true });
    //         history.push('/games')
    //         // console.log('hey')
    //       }
    //   })
    //   .catch((error) => {
    //     setError(error)
    //     console.log(error.message)
    //   });

    //   const setLoggedIn = {
    //     logged_in: true
    //   };

    //   await axios.post(`http://localhost:5000/loggedin/${logged_in_user.loggedUser}`, setLoggedIn)
    //   await axios.post(`https://majestic-express-server.herokuapp.com/loggedin/${logged_in_user.loggedUser}`, setLoggedIn)
  }

  //  console.log(online)
  const handleFirestoreLogin = async () => {
    // setError('');
    try {
      await firestoreLogin(pin);
      // history.push('/profile')
      // console.log('success')
    } catch {
      setError("Failed to login");
      console.log(error);
    }
  };

  const random = uniqueRandom(100000000000, 999999999999);
  console.log(random());

  return (
    <div className="main">
      <main className="panel">
        {hasAccount ? (
          <>
            <div className="panel__half half--first">
              <h2>Login</h2>
              <p>Login with your pin code and email</p>
              <div className="input">
                <input
                  type="text"
                  placeholder="Enter email"
                  className="input-text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="parentNumber"
                  title="Email Address"
                />
                    <p></p>
                <input
                  type="text"
                  placeholder="Enter pin"
                  className="input-text"
                  name="pincode"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  id="parentNumber"
                  title="Email Address"
                />

                <button
                  type="submit"
                  onClick={handleMongoLogin}
                  className="button"
                >
                  Login
                </button>
              </div>
            </div>

            <div className="panel__half half--second">
              <h2>Hello, friend!</h2>
              <p>Enter your personal details and start your journey with us</p>
              <button onClick={() => setHasAccount(!hasAccount)}>
                Sign up
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="panel__half half--first">
              <h2>Sign Up</h2>
              <p>Enter your personal details and start your journey with us</p>
              <div className="input">
                <input
                  type="text"
                  placeholder="Name"
                  className="input-text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="parentNumber"
                  title="username"
                />

                <p></p>

                <input
                  type="email"
                  placeholder="Email"
                  className="input-text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="parentNumber"
                  title="Email"
                />

                <p></p>

                <input
                  type="text"
                  placeholder="Address(city, state, zip)"
                  className="input-text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="parentNumber"
                  title="address"
                />

                <p></p>

                <input
                  type="text"
                  placeholder="Phone"
                  className="input-text"
                  name="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  id="parentNumber"
                  title="Email Address"
                />

                <p></p>

                {/* <input
                  type="file"
                  placeholder="Choose photo"
                  className="input-text"
                  name="phone"
                  onChange={handleImageChange}
                  id="fileUpload"
                  title="image"
                /> */}

                <button
                  type="submit"
                  onClick={() => {
                    handleDataUpload();
                    createMongoUser();
                  }}
                  className="button"
                >
                  Sign up
                </button>
              </div>
            </div>

            <div className="panel__half half--second">
              <h2>Hello, friend!</h2>
              <p>Returning guest? Login to continue your journey with us</p>
              <button onClick={() => setHasAccount(!hasAccount)}>Login</button>
            </div>
          </>
        )}
        {/* <div className="panel__half half--first">
          <h2>Sign up</h2>
          <p>Login with your email account</p>
          <div className="input">
            <input type="text" placeholder="Email" 
              className="input-text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="parentNumber"
              title="Email Address"
            />
            <button type="submit" onClick={handleFirestoreLogin} className="button">
                  Login
            </button>
          </div>
        </div>
       
        <div className="panel__half half--second">
          <h2>Hello, friend!</h2>
          <p>Enter your personal details and start your journey with us</p>
          <button>Sign up</button>
        </div> */}
      </main>
      <TheBackgroundMusic />
    </div>
  );
}

export default Login3;
