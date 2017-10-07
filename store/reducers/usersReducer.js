import { combineReducers } from 'redux'
import {
  SEARCH_RESULT_INIT_ACTION,
  SEARCH_RESULT_RECEIVED_ACTION,
  ADD_USER_DETAILS_ACTION,
  NEXT_RESULT_RECEIVED_ACTION,
  CLEAR_SEARCH_RESULT_ACTION,
  ADD_USER_FOLLOWER_COUNT_ACTION,
  ADD_USER_FOLLOWING_COUNT_ACTION,
} from '../constants'

const usersByIdReducer = (state = {}, { type, payload, username }) => {
  switch (type) {
    case SEARCH_RESULT_INIT_ACTION:
    case CLEAR_SEARCH_RESULT_ACTION:
      return {}
    case SEARCH_RESULT_RECEIVED_ACTION:
    case NEXT_RESULT_RECEIVED_ACTION:
      return payload.reduce((acc, cur) => {
        acc[cur.login] = cur
        return acc
      }, state)
    case ADD_USER_FOLLOWER_COUNT_ACTION:
      return {
        ...state,
        [username]: {
          ...state[username],
          followerCount: payload,
        },
      }
    case ADD_USER_FOLLOWING_COUNT_ACTION:
      return {
        ...state,
        [username]: {
          ...state[username],
          followingCount: payload,
        },
      }
    case ADD_USER_DETAILS_ACTION:
      return {
        ...state,
        [payload.login]: payload,
      }
    default:
      return state
  }
}

const usersAllIdReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SEARCH_RESULT_INIT_ACTION:
    case CLEAR_SEARCH_RESULT_ACTION:
      return []
    case SEARCH_RESULT_RECEIVED_ACTION:
    case NEXT_RESULT_RECEIVED_ACTION:
      return state.concat(payload.map(({ login }) => login))
    default:
      return state
  }
}

export default combineReducers({
  allIds: usersAllIdReducer,
  byId: usersByIdReducer,
})
