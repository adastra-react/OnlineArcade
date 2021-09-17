import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from "./Context/AuthContext";
import App from './containers/App/App'
import "./css/style.css"
import BlackJack from './containers/Game/BlackJack.jsx'
import Roulette from './containers/Game/Roulette';
import Slots from './containers/Game/Slots';
import Wheel_of_fortune from './containers/Game/Wheel_of_fortune'
import reportWebVitals from './containers/reportWebVitals'
import LandingPage from "./components/landingPage";
import Privacy from "./components/privacy";

import Sidebar from './components/sidebar';
import About from "./components/about";
import GameUpdates from "./components/gameUpdates";

import HomeAlt from "./components/homeAlt";


//Game Import
import bingo_game from "./Games/Bingo_unity";

//Game Import

import Login3 from "./components/login3";
import Signup from "./components/signup";

import PrivateRoute from "./components/PrivateRoute";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <AuthProvider>
          <Switch>
      {/*     <PrivateRoute path="/bingo" component={bingo_game} />
            <PrivateRoute path="/wof" component={Wheel_of_fortune} />
            <PrivateRoute path="/slots" component={Slots} />
            <PrivateRoute path="/blackjack" component={BlackJack} />
            <PrivateRoute path="/roulette" component={Roulette} />  */}
            <PrivateRoute path="/games" component={HomeAlt} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/about" component={About} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login3} /> 
            <Route path="/game-updates" component={GameUpdates} />
            <Route path="/" component={LandingPage} />


          </Switch>
        </AuthProvider>
 <Sidebar />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();