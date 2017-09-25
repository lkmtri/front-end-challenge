import { combineReducers } from 'redux'
import {
  UPDATE_SEARCH_STRING_ACTION,
  SEARCH_RESULT_INIT_ACTION,
  SEARCH_RESULT_RECEIVED_ACTION,
  ADD_USER_DETAILS_ACTION,
  NEXT_RESULT_INIT_ACTION,
  NEXT_RESULT_RECEIVED_ACTION,
  CLEAR_SEARCH_RESULT_ACTION,
  ADD_USER_FOLLOWER_COUNT_ACTION,
  ADD_USER_FOLLOWING_COUNT_ACTION,
} from '../constants'

const userByIdReducer = (state = {}, { type, payload, username }) => {
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

const initialSearchState = {
  searchString: '',
  loading: false,
  page: 1,
  nextPageLoading: false,
  hasNextPage: false,
}

const searchStateReducer = (state = initialSearchState, { type, payload }) => {
  switch (type) {
    case UPDATE_SEARCH_STRING_ACTION:
      return {
        ...state,
        searchString: payload,
      }
    case SEARCH_RESULT_INIT_ACTION:
      return {
        ...state,
        loading: true,
        page: 1,
        searchString: payload,
        hasNextPage: false,
      }
    case SEARCH_RESULT_RECEIVED_ACTION: {
      return {
        ...state,
        loading: false,
        hasNextPage: payload.length !== 0,
      }
    }
    case NEXT_RESULT_INIT_ACTION:
      return {
        ...state,
        nextPageLoading: true,
        page: state.page + 1,
      }
    case NEXT_RESULT_RECEIVED_ACTION:
      return {
        ...state,
        hasNextPage: payload.length !== 0,
        nextPageLoading: false,
      }
    case CLEAR_SEARCH_RESULT_ACTION:
      return initialSearchState

    default:
      return state
  }
}

export default combineReducers({
  searchState: searchStateReducer,
  usersById: userByIdReducer,
  usersAllId: usersAllIdReducer,
})
