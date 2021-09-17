import React, { useContext, useEffect, useState } from 'react';
import 'firebase/auth';
import { useHistory } from "react-router";
import { auth, db, storage } from '../firebase';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import useWindowFocus from 'use-window-focus';


// import { getAuth, signInWithCustomToken } from "firebase/auth";


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    // const windowFocused = useWindowFocus();
    const [currentUser, setCurrentUser] = useState([]);
    // const [userInfo, setUserInfo] = useState([]);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    // const [userOnline, setUserOnline] = useState([])
    const [error, setError] = useState('');
    const [aunthenticatedUsers, setAuthenticatedUsers] = useState([]);
    let history = useHistory();
    // const location = useLocation();

    const handleImageChange = (e, setImage) => {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    useEffect(() => {
        db.collection('Users').onSnapshot(snapshot => {
          setAuthenticatedUsers(snapshot.docs.map(doc => doc.data()))
        })
      }, [])

    //   console.log(aunthenticatedUsers)

    // const handleOnlineStatus = () => {
        
    //   }


    // const handleWindowFocus = () => {
    //     if(windowFocused===true){
    //         db.collection("Users").where("pin", "==", users.pin).get()
    //             .then(querySnapshot => {
    //             querySnapshot.docs[0].ref.update({
    //                 onlineStatus: 'Online'
    //             });
    //         });
    //     }else if(windowFocused===false){
    //         db.collection("Users").where("pin", "==", users.pin).get()
    //             .then(querySnapshot => {
    //             querySnapshot.docs[0].ref.update({
    //                 onlineStatus: 'Offline'
    //             });
    //         });
    //     }else if(users===''){
    //         db.collection("Users").where("pin", "==", users.pin).get()
    //             .then(querySnapshot => {
    //             querySnapshot.docs[0].ref.update({
    //                 onlineStatus: 'Offline'
    //             });
    //         });
    //     }
    // }

    const ImageUpload = (email, name, address, phone, image, setImage, setProgress) => {
        const uploadTask = storage.ref(`image/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress)
            },
            (error) => {
                console.log(error)
                alert(error.message)
            },
            () => {
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    db.collection('UnauthenticatedUsers')
                    .add({
                        email: email,
                        name: name,
                        address: address,
                        phone: phone,
                        imageUrl: url
                    })
                    setProgress(0)
                    setImage(null)
                })
            }
        )
    }

    // const [FiretoreUsers, setFirestoreUsers] = useState([]);

    const login = async(email, pin) => {
        const LoginCred = {
            email: email,
            pin: pin,
          };
      
          let logged_in_user = {};
          
      
          await axios
            .post(`https://majestic-express-server.herokuapp.com/api/auth/login`, LoginCred)
            // .post(`http://localhost:5000/api/auth/login`, LoginCred)
            .then((res) => {
              console.log(res.data)
              logged_in_user = res.data
              
            //   localStorage.removeItem("authToken")
            //   localStorage.removeItem("userOBJ")

              localStorage.setItem("authToken", logged_in_user.token)
              localStorage.setItem("userOBJ", logged_in_user.loggedUser)
                if(localStorage.getItem('authToken') && localStorage.getItem('userOBJ')){
                  history.push('/games')
                }
            })
            .catch((error) => {
              setError(error)
              console.log(error.message)
            });

            setUser(logged_in_user)
      
            // const setLoggedIn = {
            //   logged_in: true
            // };
      
            // await axios.post(`http://localhost:5000/loggedin/${logged_in_user.loggedUser}`, setLoggedIn)
            // await axios.post(`https://majestic-express-server.herokuapp.com/loggedin/${logged_in_user.loggedUser}`, setLoggedIn)
    }    

    // const firestoreLogin = async (pin) => {
    //     setError('')
    //     await db.collection("Users").where("pin", "==", pin)
    //     .get()
    //     .then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             // doc.data() is never undefined for query doc snapshots
    //             console.log(doc.data());
    //             setUsers(doc.data());
    //             // localStorage.setItem('loggedIn', true);
    //             console.log("Success")
    //             history.push('/games')
    //         });
    //     }).catch(
    //         // setError("No such user exists"),
    //         console.log("error")
    //     )
    // }
// console.log(loggedIn)
    // const verify = () => {
    //     if(users){
    //         console.log(users)
    //         setLoggedIn(true);
    //         localStorage.setItem('loggedIn', true);
    //         // history.push('/profile')
    //     }else{
    //         setLoggedIn(false);
    //         localStorage.setItem('loggedIn', false);
    //     }
    // }

    // const uploadData = (email, name, address, phone) => {
    //     db.collection('UnauthenticatedUsers')
    //     .add({
    //         email: email,
    //         name: name,
    //         address: address,
    //         phone: phone,
    //     }).then(() => {
    //         console.log('Data submitted!')
    //     }).catch((error) => {
    //         console.log(error.message)
    //     })
    // }

    
    const signInWIthCUstomToken = (token) => {
        return auth.signInWithCustomToken(token)
    }

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const logOut = async() => {
        history.push('/')
        localStorage.removeItem("authToken");
        localStorage.removeItem("userOBJ");
        const setLoggedIn = {
            logged_in: false
          };
    
          await axios.post(`https://majestic-express-server.herokuapp.com/loggedin/${user.loggedUser}`, setLoggedIn)
    }

    // useEffect(() => {
    //     if(!localStorage.getItem("authToken") && !localStorage.getItem("authToken")){
    //         history.push('/')
    //     }
    // },[])

    useEffect(() => {
         const unsubscribe = auth.onAuthStateChanged(users => {
            setUsers(users);
            // getUsers();
        })
        console.log(users)
        
        // handleWindowFocus();
        return unsubscribe
    }, [])

    
    const value = {
        currentUser,
        logOut,
        signUp,
        login,
        users,
        user,
        ImageUpload,
        handleImageChange,
        loggedIn,
        setLoggedIn
    }

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}
