import React, { useEffect, useState } from "react";
import style from "./update-form.module.css";
import PublicForm from "../PublicForm/PublicForm";
import useHandleFormSubmit from "../useHandleFormSubmit";
import { connect } from 'react-redux';
import {requestNewsDataToUpdate,sendInfoToUpdatePost} from '../../assets/api';

const UpdateForm = ({token }) => {
  const [currentNews, updateCurrentNews] = useState({});
  const handleRequestedDataToUpdate = async (inputData) => {
    const data = await requestNewsDataToUpdate(inputData,token)
    updateCurrentNews(data)
  }

  // const updatePost = data => {
  //   const makeRequest = async () => {
  //     const formData = new FormData();
  //     for (let key in data) {
  //       if (key !== "file") {
  //         formData.set(key, data[key]);
  //       }
  //     }
  //     formData.append("media", data.file);
  //     const response = await axios({
  //       method: "post",
  //       url: `http://213.111.67.158/wordpress/wp-json/jwt-auth/v1news/v1/published/${data.ID}`,
  //       data: formData,
  //       config: { headers: { "Content-Type": "multipart/form-data" } },
  //     });
  //   };
  //   makeRequest(currentNews);
  // };
  const [handleSubmit, handleInputChange, inputs] = useHandleFormSubmit(
    handleRequestedDataToUpdate
  );
  console.log()
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
        <PublicForm callback={sendInfoToUpdatePost} defaultInputs={currentNews} />
        <img src={currentNews.imageUrl} className={style.image} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { token } = state;
  return { token };
}

export default connect(mapStateToProps)(UpdateForm)
