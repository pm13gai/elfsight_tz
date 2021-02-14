import axios from "axios"

export const GET_ALBUMS_REQUEST = 'GET_ALBUMS_REQUEST'
export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS'
export const GET_ALBUMS_FAIL = 'GET_ALBUMS_FAIL'

export function loadAlbums(id) {
  return function(dispatch) {
    dispatch({
      type: GET_ALBUMS_REQUEST,
    })

    let url = "https://jsonplaceholder.typicode.com/albums?userId=" + id;
    axios.get(url)
      .then(async function(data){
        try{
          let arr = await Promise.all(data.data.map(el=>axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${el.id}`)))
          let albums_data = data.data.map((el,index)=>{
            return {...el, photos : arr[index].data}
            })
          dispatch({
            type: GET_ALBUMS_SUCCESS,
            payload: albums_data,
          })
        } catch(err){
          dispatch({
            type: GET_ALBUMS_FAIL,
            error: true,
            payload: new Error('Ошибка получения фото'),
          })
        }
        
      })
      .catch(err=>{
        dispatch({
          type: GET_ALBUMS_FAIL,
          error: true,
          payload: new Error('Ошибка получения данных альбомов'),
        })
      })

  }
}
