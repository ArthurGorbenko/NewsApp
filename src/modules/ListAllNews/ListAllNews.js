import React, { useState, useEffect } from "react";
import style from "./list-news.module.css";
import axios from "axios";

const ListNews = () => {
  const [news, updateNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios({
        method: "get",
        url: `http://213.111.67.158/wordpress/wp-json/news/v1/published`,
      });
      updateNews(response.data);
    };
    fetchNews();
  }, []);
  return (
    <div className={style.wrapper_items}>
      {news && news.length ? (
        news.map(item => (
          <ul className={style.wrapper_item} key={item.ID}>
            <li>ID:{item.ID}</li>
            <li>Title:{item.post_title}</li>
            <li>Content:{item.post_content}</li>
            <li>Date:{item.post_date}</li>
            <li>Author Name:{item.author_name}</li>
            <li>Author Email:{item.author_email}</li>
            <li>Attachment:{item._thumbnail_id}</li>
            <li>
              <img
                className={style.image}
                src={item.attachment_url}
                alt="page"
              />
            </li>
          </ul>
        ))
      ) : (
        <h3>Loading....</h3>
      )}
    </div>
  );
};

export default ListNews;