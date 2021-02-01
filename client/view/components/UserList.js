import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../store/users/users.actions";

const UserList = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div>
            <h1>User List</h1>
            <Link to="/">GO Home</Link>
            <ul>
                {JSON.stringify(users)}
                {
                    users.map((user) => (
                        <li key={user.id}>{user.first_name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default UserList
