import React, { useState, useEffect } from "react";
import style from "./public-form.module.css";
import useHandleFormSubmit from "../useHandleFormSubmit";

const PublicForm = ({ callback, defaultInputs }) => {
  const [
    handleSubmit,
    handleInputChange,
    inputs,
    setInputs,
  ] = useHandleFormSubmit(callback);
  const [files, setFiles] = useState({});
  let myReff = React.createRef();

  useEffect(() => {
    setInputs({ ...defaultInputs });
  }, [defaultInputs,setInputs]);

  useEffect(() => {
    setInputs({ ...inputs, file: files });
  }, [files,setInputs]);

  const handleFileUpload = e => {
    e.preventDefault();
    setFiles(e.target.files[0]);
  };

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
          value={inputs.name ? inputs.name : ''}
          onChange={e => handleInputChange(e)}
        />
      </label>
      <label className={style.item}>
        Email{"  "}
        <input
          type="email"
          name="email"
          value={inputs.email ? inputs.email : ''}
          onChange={e => handleInputChange(e)}
        />
      </label>
      <label className={style.item}>
        Topic{"  "}
        <input
          type="text"
          name="topic"
          value={inputs.topic ? inputs.topic : ''}
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
        value={inputs.message ? inputs.message : ''}
      ></textarea>
      <label className={style.item}>
        Category {"  "}
        <select
          name="category"
          onChange={e => handleInputChange(e)}
          value={inputs.category ? inputs.category : "Travel"}
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
        name="file"
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
