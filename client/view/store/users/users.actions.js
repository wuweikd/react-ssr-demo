import axios from "axios";
export const FETCH_USERS = "FETCH_USERS"

export const fetchUsers = () => async (dispatch) => {
    const res = await axios.get('https://reqres.in/api/users?page=1')
    console.log('dispatch------>', dispatch)
    dispatch({
        type: FETCH_USERS,
        payload: res.data.data
    })
}
