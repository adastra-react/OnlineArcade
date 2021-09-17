import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../Context/AuthContext";
import "../css/login.css";
// import firebase from '../firebase';

function Login() {

  //signup credentials
  const [email, setEmail] = useState(window.localStorage.getItem("Email for signin") || "");
  // const [email, setEmail] = useState("");
  const [token, setToken] = useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const { login, currentUser, uploadData, firestoreLogin } = useAuth();
  const [loading, setLoading] = useState(false)
  //signup credentials

  //upload signup data
  // const [uploadEmail, setUploadEmail] = useState([]);
  // const [uploadUid, setUploadUid] = useState([]);

  //upload signup data


  let history = useHistory();

  const handleLogin = async () => {
    try{
      setError("")
      await login(email, password)
      // handleUploadData();
      // history.push('/profile')
    }catch{
      setError('Failed to login')
      console.log(error)
    }
    
    // console.log(currentUser)
  }

  const handleFirestoreLogin = async () => {
    try{
      // setError('');
        await firestoreLogin(email);
        // history.push('/profile')
        // console.log('success')
    }catch{
      setError('Failed to login')
      console.log(error)
    }

  }

    return (
      <div className="login">
    <div className="login-container">
        <div className="input-img"></div>

          <div className="input-container">
       
     <div className="input">
       
                  <input
                    className="input-text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="parentNumber"
                    placeholder="email@domain.com"
                    title="Email Address"
                  />

                  <label className="input-label">Email Address</label>
                  <button type="submit" onClick={handleFirestoreLogin} className="button">
                  Login
                </button>

                </div>
                </div>
       </div>
       </div>
    );
  }
  
  export default Login;
  