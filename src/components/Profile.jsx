// import React from 'react';
// import '../css/Profile.css';
// import { useHistory } from "react-router";
// import { Link } from 'react-router-dom'
// import { useAuth } from "../Context/AuthContext";
// import useWindowFocus from 'use-window-focus';
// import useLocalStorage from 'react-use-localstorage';
// import firebase, { auth, db, storage } from '../firebase';

// function Profile() {
    
//     const windowFocused = useWindowFocus();
//     const { currentUser, users, logOut, uploadData } = useAuth();
//     const [pin, setPin] = useLocalStorage('pin', users.pin);
//     let history = useHistory();

//     const handleLogOut = async () => {
//         //setError('') - Suniel, remember to set this state.

//         try{
//             await logOut()
//             history.push('/')
//             db.collection("Users").where("pin", "==", pin).get()
//             .then(querySnapshot => {
//             querySnapshot.docs[0].ref.update({
//                 onlineStatus: '#FF0000'
//             });
//         });
//         }catch{
//             //setError - Suniel, remember to set this state.
//         }
//     }

//     // const handleOnlineStatus = () => {
//             if(users!==null){
//                 if(windowFocused===true){
//                 db.collection("Users").where("pin", "==", pin).get()
//                     .then(querySnapshot => {
//                     querySnapshot.docs[0].ref.update({
//                         onlineStatus: '#00FF00'
//                     });
//                 });
//             }else if(windowFocused===false){
//                 db.collection("Users").where("pin", "==", pin).get()
//                     .then(querySnapshot => {
//                     querySnapshot.docs[0].ref.update({
//                         onlineStatus: '#FF0000'
//                     });
//                 });
//             }else if(users===''){
//                 db.collection("Users").where("pin", "==", pin).get()
//                     .then(querySnapshot => {
//                     querySnapshot.docs[0].ref.update({
//                         onlineStatus: '#FF0000'
//                     });
//                 });
//             }  
//             }else{
                
//             }
//     // }

//     // if(windowFocused===true){
//     //     db.collection("Users").where("pin", "==", users.pin).get()
//     //         .then(querySnapshot => {
//     //         querySnapshot.docs[0].ref.update({
//     //             onlineStatus: 'Online'
//     //         });
//     //     });
//     // }else if(windowFocused===false){
//     //     db.collection("Users").where("pin", "==", users.pin).get()
//     //         .then(querySnapshot => {
//     //         querySnapshot.docs[0].ref.update({
//     //             onlineStatus: 'Offline'
//     //         });
//     //     });
//     // }else if(users===''){
//     //     db.collection("Users").where("pin", "==", users.pin).get()
//     //         .then(querySnapshot => {
//     //         querySnapshot.docs[0].ref.update({
//     //             onlineStatus: 'Offline'
//     //         });
//     //     });
//     // }

//     return (
//         <div className="profile">
//             <div className="profile-name-cont">
//                 <h2 className="profile-title" >Profile</h2>
//                 <p className="profile-name">Email: {users.email}</p>
//                 <p className="profile-name">pin: {users.pin}</p>
//                 <button onClick={handleLogOut} className="logout-button" >Log out</button>
//                 <Link to='/games'>
//                     <button className="logout-button" >Go to games</button>
//                 </Link>
//                 {/* <button onClick={handleUploadData} className="logout-button" >Upload data</button> */}
                
//             </div>
//         </div>
//     )
// }

// export default Profile
