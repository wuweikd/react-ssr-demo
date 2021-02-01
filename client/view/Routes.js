import React from 'react'
import { Route } from 'react-router-dom'
import Home from "./components/home";
import UserList from "./components/UserList";

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/userList" component={UserList}></Route>
        </div>
    )
}
export default Routes
