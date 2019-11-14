import React, { useEffect, useState } from "react";
import style from "./update-form.module.css";
import PublicForm from "../PublicForm/PublicForm";
import useHandleFormSubmit from "../useHandleFormSubmit";
import axios from "axios";

const UpdateForm = ({ sendNewNewsPost }) => {
  const [currentNews, updateCurrentNews] = useState({});
  const requestNewsDataToUpdate = data => {
    const { news_id } = data;
    const makeRequest = async news_id => {
      const response = await axios({
        method: "get",
        url: `http://213.111.67.158/wordpress/wp-json/news/v1/published/${news_id}`,
      });
      const { data } = response;
      const {
        ID,
        author_name,
        author_email,
        post_title,
        category,
        post_content,
        attachment_url,
      } = data;
      updateCurrentNews({
        ID,
        name: author_name,
        email: author_email,
        topic: post_title,
        message: post_content,
        category,
        imageUrl: attachment_url,
      });
    };
    makeRequest(news_id);
  };

  const updatePost = data => {
    const makeRequest = async () => {
      const formData = new FormData();
      for (let key in data) {
        if (key !== "file") {
          formData.set(key, data[key]);
        }
      }
      formData.append("media", data.file);
      const response = await axios({
        method: "post",
        url: `http://213.111.67.158/wordpress/wp-json/news/v1/published/${data.ID}`,
        data: formData,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
    };
    makeRequest();
  };
  const [handleSubmit, handleInputChange, inputs] = useHandleFormSubmit(
    requestNewsDataToUpdate
  );
  return (
    <div>
      <div className={style.wrapper}>
        <form onSubmit={e => handleSubmit(e)} className={style.form}>
          Enter ID {"   "}
          <input
            type="text"
            name="news_id"
            value={inputs.news_id}
            onChange={e => handleInputChange(e)}
            className={style.input}
          />
          <input type="submit" value="Request" className={style.input} />
        </form>
        <PublicForm callback={updatePost} defaultInputs={currentNews} />
        <img src={currentNews.imageUrl} className={style.image} />
      </div>
    </div>
  );
};

export default UpdateForm;
