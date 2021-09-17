import React from 'react';
import '../css/Header.css';
import { useHistory } from "react-router";
import useLocalStorage from 'react-use-localstorage';
import { useAuth } from "../Context/AuthContext";
import firebase, { auth, db, storage } from '../firebase';
import { ReactComponent as Logo } from '../images/logo.svg';
import { Link } from "react-router-dom";

import TheBackgroundMusic from "../components/theBackgroundMusic";

function HeaderAlt() {
    
    const { users, logOut, uploadData, loggedIn, setLoggedIn } = useAuth();
    const history = useHistory();
    // const [pin, setPin] = useLocalStorage('pin', users.pin);
    
    const handleLogOut = async () => {
        //setError('') - Suniel, remember to set this state.

        try{
            await logOut()
            history.push('/')
            db.collection("Users").where("pin", "==", users.pin).get()
            .then(querySnapshot => {
            querySnapshot.docs[0].ref.update({
                onlineStatus: '#FF0000'
            });
        }).then(
            setLoggedIn(false)
        );
        }catch{
            //setError - Suniel, remember to set this state.
        }
    }

    return (
        <div className="header">
            <div className="header_cont">
                <div className="name_logo_cont">
                <Link to="/" className="button">
                <Logo className='landingPage-logo '/>
               </Link>
             {/*        <p className="header_name_user">{users.name}</p> */}
                </div>

                <div>
                    <a href="#login" className="landingPage-sign-up-button login-btn" onClick={handleLogOut} >Login</a>
                </div>
            </div>
            <TheBackgroundMusic />
        </div>
    )
}

export default HeaderAlt
