import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import { useHistory } from "react-router";
import axios from "axios";
import useLocalStorage from 'react-use-localstorage';
// import use auth
    import { useAuth } from "../Context/AuthContext";
// import use auth
import firebase, { auth, db, storage } from '../firebase';

function Header() {
    
    // get firebase users from useauth
        const { users, logOut, uploadData, loggedIn, setLoggedIn } = useAuth();
    // get firebase users from useauth

    // state for mongo user
        const [mongoUser, setMongoUser] = useState([]);
    // state for mongo user
    const history = useHistory();
    
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

    // Get request to get a specific user's IGC and display it in the header
            const getMongoUsers = async () => {
                await axios.get(`https://majesticserver.herokuapp.com/user/${users.mong_id}`)
                .then((response) => {
                setMongoUser(response.data)
                })
            }

            useEffect(() => {
                getMongoUsers();
            }, [])
      // Get request to get a specific user's IGC and display it in the header

      console.log(mongoUser)

    return (
        <div className="header">
            <div className="header_cont">
                <div className="name_logo_cont">
                    <img className="header_image" src={users.imageUrl} alt="profile img" />
                    <p className="header_name_user">{users.name}</p>
                </div>

                {/* code to display igc in header */}
                    <div>
                    <p className="header_name_user">{mongoUser.igc}</p>
                    </div>
                {/* code to display igc in header */}

                <div>
                <p className="header_name_user">{mongoUser.igc}</p>
                </div>

                <div>
                    <button className='login_btn' onClick={handleLogOut} >Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Header
