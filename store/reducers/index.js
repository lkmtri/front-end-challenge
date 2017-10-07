import { combineReducers } from 'redux'
import searchStateReducer from './searchStateReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  searchState: searchStateReducer,
  users: usersReducer,
})
