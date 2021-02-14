import {
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAIL
} from '../actions/AlbumsActions'

const initialState = {
  data: [],
  error: '',
  isFetching: false,
}

export function albumsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALBUMS_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case GET_ALBUMS_SUCCESS:
      return { ...state, isFetching: false, data: action.payload }
      

    case GET_ALBUMS_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }


    default:
      return state
  }
}
