import { useEffect, useState } from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useAuth } from "../Context/AuthContext";
import { useHistory } from "react-router";
import useWindowFocus from "use-window-focus";
import useLocalStorage from "react-use-localstorage";
import { useBeforeunload } from "react-beforeunload";
import firebase, { auth, db, storage } from "../firebase";
import TheIGC from "./TheIGC";
import TheBackgroundMusic from "../components/theBackgroundMusic";
import TheAuthHeader from "./TheAuthHeader";
import { ReactComponent as Ig } from "../images/instagram.svg";
import { ReactComponent as Fb } from "../images/facebook.svg";

function HomeAlt() {
  const windowFocused = useWindowFocus();
  const { currentUser, user, logOut, uploadData } = useAuth();
  let [online, isOnline] = useState(navigator.onLine);
  // const [pinState, setPinState] = useState({ pin: users.pin });
  // const { pin } = pinState;
  let history = useHistory();

  // if (users !== null) {
  //   if (windowFocused === true) {
  //     db.collection("Users")
  //       .where("pin", "==", pin)
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.docs[0].ref.update({
  //           onlineStatus: "#00FF00",
  //         });
  //       });
  //   } else if (windowFocused === false) {
  //     db.collection("Users")
  //       .where("pin", "==", pin)
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.docs[0].ref.update({
  //           onlineStatus: "#FF0000",
  //         });
  //       });
  //   } else if (users === "") {
  //     db.collection("Users")
  //       .where("pin", "==", pin)
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.docs[0].ref.update({
  //           onlineStatus: "#FF0000",
  //         });
  //       });
  //   }
  // } else {
  // }

  useBeforeunload((event) => {});

  // console.log(users)

  // useEffect(() => {
  //   if (pin === !users.pin) {
  //     const pinS = JSON.parse(localStorage.getItem("user"));
  //     setPinState((prev) => ({ ...prev, ...pinS }));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(pinState));
  // }, [pin]);

  const setOnline = () => {
    console.log('We are online!');
    isOnline(true);
  };
  const setOffline = () => {
    console.log('We are offline!');
    isOnline(false);
  };

  // Register the event listeners
  useEffect(() => {
    window.addEventListener('offline', setOffline);
    window.addEventListener('online', setOnline);

    // cleanup if we unmount
    return () => {
      window.removeEventListener('offline', setOffline);
      window.removeEventListener('online', setOnline);
    }
  }, []);

  return (
    <div className="game_list">
   
      <div className="games_cont">
        <TheAuthHeader />
     <TheIGC />
        <div className="games-grid">
          <Link className="small-image a" to="/bingo">
            <div>
              <p className="small-title">Majestic Bingo </p>
            </div>
          </Link>
          <Link className="small-image b" to="/wof">
            <div>
              <p className="small-title">Majestic Wheel Of Fortune</p>
            </div>
          </Link>
          <Link className="small-image d" to="/slots">
            <div>
              <p className="small-title">Majestic Slots</p>
            </div>
          </Link>
          <Link className="small-image c" to="/blackjack">
            <div>
              <p className="small-title">Majestic Black Jack</p>
            </div>
          </Link>
          <Link className="small-image e" to="/Roulette">
            <div>
              <p className="small-title">Majestic Roulette</p>
            </div>
          </Link>
        </div>
      </div>
      <footer className="lpfooter">
        <a href="https://www.instagram.com/majesticarcade/" target="_blank">
          {" "}
          <div className="socialBg">
            {" "}
            <Ig className="social" />
          </div>
        </a>
        <a
          href="https://www.facebook.com/majesticarcadesm/?business_id=132384572356014"
          target="_blank"
        >
          {" "}
          <div className="socialBg">
            {" "}
            <Fb className="social" />
          </div>
        </a>
      </footer>
      <TheBackgroundMusic />
    </div>
  );
}

export default HomeAlt;
