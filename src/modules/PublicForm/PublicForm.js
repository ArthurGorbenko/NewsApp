import React, { useState, useEffect } from "react";
import style from "./public-form.module.css";
import useHandleFormSubmit from "../useHandleFormSubmit";
import axios from "axios";

const PublicForm = () => {
  let myReff = null;
  const [files, setFiles] = useState({});
  const signup = data => {
    const makeRequest = async () => {
      const formData = new FormData();
      for (let key in data) {
        formData.set(key, data[key]);
      }
      formData.append("media", files);
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

  const handleFileUpload = e => {
    e.preventDefault();
    setFiles(e.target.files[0]);
  };

  const [handleSubmit, handleInputChange, inputs] = useHandleFormSubmit(signup);
  return (
    <form
      className={style.form}
      onSubmit={e => handleSubmit(e)}
      encType="multipart/form-data"
    >
      <label className={style.item}>
        Name{"  "}
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={e => handleInputChange(e)}
        />
      </label>
      <label className={style.item}>
        Email{"  "}
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={e => handleInputChange(e)}
        />
      </label>
      <label className={style.item}>
        Topic{"  "}
        <input
          type="text"
          name="topic"
          value={inputs.topic}
          onChange={e => handleInputChange(e)}
        />
      </label>
      <textarea
        className={style.item}
        id=""
        cols="30"
        rows="10"
        name="message"
        placeholder="Enter your message here..."
        onChange={e => handleInputChange(e)}
        value={inputs.message}
      ></textarea>
      <label className={style.item}>
        Category {"  "}
        <select
          name="category"
          onChange={e => handleInputChange(e)}
          value={inputs.category}
        >
          <option value="Travel">Travel</option>
          <option value="Psyhology">Psyhology</option>
          <option value="Relationship">Relationship</option>
          <option value="Sport">Sport</option>
        </select>
      </label>
      <input
        className={style.item}
        type="file"
        name="media"
        ref={r => {
          myReff = r;
        }}
        onChange={handleFileUpload}
      />
      <input className={style.item} type="submit" />
    </form>
  );
};

export default PublicForm;
