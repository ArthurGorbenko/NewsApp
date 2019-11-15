import React, { useState } from "react";
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
            value={inputs.news_id ? inputs.news_id : '' }
            onChange={e => handleInputChange(e)}
            className={style.input}
          />
          <input type="submit" value="Request" className={style.input} />
        </form>
        <PublicForm callback={sendInfoToUpdatePost} defaultInputs={currentNews} />
        <img src={currentNews.imageUrl} alt="news attachment" className={style.image} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { token } = state;
  return { token };
}

export default connect(mapStateToProps)(UpdateForm)
