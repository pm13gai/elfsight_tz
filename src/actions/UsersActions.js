import axios from 'axios'

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAIL = 'GET_USERS_FAIL'

export function loadUsers() {
  return function(dispatch) {
    dispatch({
      type: GET_USERS_REQUEST,
    })

    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((data)=>{
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: data.data,
        })
      })
      .catch(err=>{
        dispatch({
          type: GET_USERS_FAIL,
          error: true,
          payload: new Error('Ошибка получения даенных пользователей'),
        })
      })

  }
}
