import React from 'react';
import { Router, Link } from '@reach/router';
import ListAllNews from '../ListAllNews/ListAllNews';
import PublicForm from '../PublicForm/PublicForm';
import axios from 'axios';
const UserMenu = () => {
    const sendNewNewsPost = data => {
        const makeRequest = async () => {
            const formData = new FormData();
            for (let key in data) {
                if (key !== "file") formData.set(key, data[key]);
            }
            formData.append("media", data.file);
            console.log(formData.getAll("name"));
            const response = await axios({
                method: "post",
                url: `http://213.111.67.158/wordpress/wp-json/news/v1/published`,
                data: formData,
                config: { headers: { "Content-Type": "multipart/form-data" } }
            });
            console.log(response);
        };
        makeRequest();
    };
    return (
        <div>
            <Link to="/">List All News</Link>
            <br />
            <Link to="/singleNews">Update news</Link>
            <br />
            <Link to="/publicForm">Suggest news</Link>
            <br />
            <Link to="/updateNews">Update news</Link>
            <br />
            <Router>
                <ListAllNews path="/listNews" />
                <PublicForm path='/publicForm' callback={sendNewNewsPost} />
            </Router>
        </div>
    )
}
export default UserMenu;