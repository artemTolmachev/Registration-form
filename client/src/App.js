import  React from "react";
import {Switch, Route} from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import { LoginPage }from "./pages/LoginPage";
import { RegisterPage }from "./pages/RegistratPage";
import Header from 'components/Header';
import HomePage from 'pages/HomePage';
import EgyptPage from "pages/EgyptPage";
import Seychelles from "pages/Seychelles";

import 'components/Header.scss';
import './App.css';

function App() {


  return (
   <div>
      <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/egypt" component={EgyptPage}/>
          <Route exact path="/seychelles" component={Seychelles}/>
        </Switch>
        <Switch>
          <Route exact path="/profile" component={ProfilePage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/registrat" component={RegisterPage}/>
        </Switch>
   </div>
  );
}

export default App;
