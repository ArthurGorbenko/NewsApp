import React,{useState} from 'react';

const useHandleFormSubmit = (callback) => {
    const [inputs, setInputs] = useState({});
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
      }
      callback(inputs);
    }
    const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return [
      handleSubmit,
      handleInputChange,
      inputs,
      setInputs
    ];
  }

  export default useHandleFormSubmit;