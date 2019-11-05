import React from "react";
import PublicForm from "./modules/PublicForm/PublicForm";
import ListNews from "./modules/ListNews/ListNews";
import { Router, Link } from "@reach/router";
import style from "./app.module.css";
function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/listNews">List News</Link>
        </li>
      </ul>
      <div className={style.wrapper}>
        <Router>
          <PublicForm path="/form" />
          <ListNews path="/listNews" />
        </Router>
      </div>
    </div>
  );
}

export default App;
