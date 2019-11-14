import React from "react";
import style from "./home-page.module.css";
import PublicForm from "../PublicForm/PublicForm";
import ListAllNews from "../ListAllNews/ListAllNews";
import ListSingleNews from "../ListSingleNews/ListSignleNews";
import UpdateForm from "../UpdateForm/UpdateForm";
import { Router, Link } from "@reach/router";
import axios from "axios";

const HomePage = () => {
  const sendNewNewsPost = data => {
    const makeRequest = async () => {
      const formData = new FormData();
      for (let key in data) {
        if (key !== "file") formData.set(key, data[key]);
      }
      formData.append("media", data.file);
      console.log(formData.getAll("name"));
      const response = await axios({
        method: "post",
        url: `http://213.111.67.158/wordpress/wp-json/news/v1/published`,
        data: formData,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
      console.log(response);
    };
    makeRequest();
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/updateForm">UpdateForm</Link>
        </li>
        <li>
          <Link to="/listNews">List News</Link>
        </li>
        <li>
          <Link to="/listSingle">List Single News</Link>
        </li>
      </ul>
      {/* <Router>
        <HomePage path="/">
          <PublicForm path="form" callback={sendNewNewsPost} />
          <UpdateForm path="updateForm" callback={sendNewNewsPost} />
          <ListAllNews path="listNews" />
          <ListSingleNews path="listSingle" />
        </HomePage>
      </Router> */}
    </div>
  );
};

export default HomePage;
