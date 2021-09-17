import { Link } from "react-router-dom";
import TheAuthHeader from "./TheAuthHeader";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Ig } from "../images/instagram.svg";
import { ReactComponent as Fb } from "../images/facebook.svg";
import React, { useState } from "react";
import "../css/landingPage.css";

import TheBackgroundMusic from "../components/theBackgroundMusic";
const FORMSPARK_ACTION_URL = "https://submit-form.com/mO0rtumT";

function LandingPage() {
  /*  const [name, setName] = useState(""); */
  let [email, setEmail] = useState("");
  /*   const [phone, setPhone] = useState(""); */
  let submitted = false;
  const textInput = React.useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      submitted = true;
      textInput.current.value = "";
      setEmail("");

      alert("Form submitted");
    } else if (submitted === true) {
      alert("Already Submitted");
    } else {
      alert("Failed Submission");
    }
  };

  return (
    <div>
      <section className="about-page">
        <TheAuthHeader />
        <div className="landing-page-background">
          <h1>Majestic Arcade</h1>
        </div>
        <div className="landing-page-info">
          <div>
            <h2 className="landing-subtitle">Majestic Arcade</h2>
            <p>
              At Majestic Arcade we play anytime,  anywhere, always Online. Play
              your favorite bingo, slots, and table games right from your mobile
              phone, tablet or desktop.
              <br />
              <br />
              Subscribe below to get the latest offers and premium benefits!
            </p>
            <form className="lpForm" onSubmit={onSubmit}>
              {/*   <input
                className="landingPage-input"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name=""
                id=""
              /> */}
              <input
                ref={textInput}
                className="landingPage-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name=""
                id=""
                required
              />
              {/*   <input
                className="landingPage-input"
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name=""
                id=""
              /> */}
              <button className="landingPage-submit" type="submit">
                Submit
              </button>
            </form>
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
      </section>
      <TheBackgroundMusic />
    </div>
  );
}

export default LandingPage;
