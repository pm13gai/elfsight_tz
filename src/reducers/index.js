import { combineReducers } from 'redux'
import { usersReducer } from './users'
import { albumsReducer } from './albums'

export const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer
})
