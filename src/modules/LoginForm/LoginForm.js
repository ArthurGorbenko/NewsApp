import React from 'react';
import style from './login-form.module.css';
import axios from 'axios';
import useHandleFormSubmit from '../useHandleFormSubmit';
import { setToken } from '../../redux/actions';
import { connect } from 'react-redux';

const LoginForm = ({ setToken }) => {
    const sendUserInfo = (inputsData) => {
        const makeRequest = async () => {
            const userInfo = new FormData();
            userInfo.set('username', inputsData.login);
            userInfo.set('password', inputsData.password);
            const response = await axios({
                method: "post",
                url: `http://213.111.67.158/wordpress/wp-json/jwt-auth/v1/token`,
                data: userInfo,
            });
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
        }
        makeRequest();
    }
    const [handleSubmit, handleInputChange, inputs] = useHandleFormSubmit(sendUserInfo);
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label>Login
                    <input type="text" name="login" value={inputs.login} onChange={e => handleInputChange(e)} />
                </label>
                <label>Password
                    <input type="text" name="password" value={inputs.password} onChange={e => handleInputChange(e)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default connect(
    null,
    { setToken }
)(LoginForm);