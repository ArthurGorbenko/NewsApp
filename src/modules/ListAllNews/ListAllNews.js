import React, { useState, useEffect } from "react";
import style from "./list-news.module.css";
import { fetchNews } from "../../assets/api";

const ListNews = () => {
  const [news, updateNews] = useState([]);
  useEffect(() => {
    const handleUpload = async () => {
      const response = await fetchNews();
      updateNews(response.data);
      return response;
    };
    handleUpload()
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
