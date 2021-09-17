import { Link } from "react-router-dom";
import TheAuthHeader from "./TheAuthHeader";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Ig } from "../images/instagram.svg";
import { ReactComponent as Fb } from "../images/facebook.svg";
import React, { useState } from "react";
import "../css/landingPage.css";

import TheBackgroundMusic from "./theBackgroundMusic";

function GameUpdates() {
  return (
    <div>
      <section className="about-page">
        <TheAuthHeader />
        <div className="about-page-background">
          <h1>Game Updates</h1>
        </div>

        <div className="about-info">
          <div>
            {" "}
            <h2>Update - August 12, 2021</h2>
            <p>Added new mode to Roulette</p>
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

export default GameUpdates;
