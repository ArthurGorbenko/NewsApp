import React from "react";
import PublicForm from "./modules/PublicForm/PublicForm";
import ListAllNews from "./modules/ListAllNews/ListAllNews";
import ListSingleNews from "./modules/ListSingleNews/ListSignleNews";
import UpdateForm from "./modules/UpdateForm/UpdateForm";
import LoginForm from "./modules/LoginForm/LoginForm";
import LogginedUser from './modules/LogginedUser/LogginedUser';
import PublicMenu from './modules/PublicMenu/PublicMenu';
import UserMenu from './modules/UserMenu/UserMenu';
import { Router, Link } from "@reach/router";
import style from "./app.module.css";
import axios from "axios";
import HomePage from "./modules/HomePage/HomePage";

const App = token => {
  return (
    <div>
      <h1>News App</h1>
      <div className={style.wrapper}>
        <Router>
          <PublicMenu path="/" />
          <UserMenu path="/:userLogin" />
        </Router>
        <Router>
          <LoginForm path="/" />
          <LogginedUser path="/:token" />
        </Router>
      </div>
      <Router>
        <ListAllNews path="/" />
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  const { token } = state;
  return token;
}

export default App;
