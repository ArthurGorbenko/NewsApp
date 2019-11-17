import {useState} from 'react';
import {useSelector} from 'react-redux';

const useHandleFormSubmit = (callback) => {
    const [inputs, setInputs] = useState({});
    const token = useSelector(state=>state.token)
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
      }
      callback(inputs,token);
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