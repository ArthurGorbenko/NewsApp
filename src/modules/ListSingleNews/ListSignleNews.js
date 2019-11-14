import React, { useState } from "react";
import style from "./list-single-news.module.css";
import useHandleFormSubmit from "../useHandleFormSubmit";
import axios from "axios";

const ListSingleNews = () => {
  const [currentNews, updateCurrentNews] = useState({});
  const fetchNews = async inputs => {
    const response = await axios({
      method: "get",
      url: `http://213.111.67.158/wordpress/wp-json/news/v1/published/${inputs.ID}`,
    });
    updateCurrentNews(response.data);
    console.log(response.data);
  };
  const [handleSubmit, handleChange, inputs] = useHandleFormSubmit(fetchNews);
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          name="ID"
          value={inputs.ID}
          onChange={e => handleChange(e)}
        />
        <input type="submit" value="Submit" />
      </form>
      {Object.keys(currentNews).length !== 0 &&
      currentNews.constructor === Object ? (
        <ul className={style.list}>
          {Object.keys(currentNews).map(key => (
            <li key={key}>{`${key} : ${currentNews[key]}`}</li>
          ))}
        </ul>
      ) : (
        <h2>You didn't enter ID yet...</h2>
      )}
    </div>
  );
};

export default ListSingleNews;
