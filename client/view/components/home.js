import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <Link to="/userList">Go UserList</Link>
            <hr />
            <button onClick={() => console.log("click me")}>click me</button>
        </div>
    );
};

export default Home;
