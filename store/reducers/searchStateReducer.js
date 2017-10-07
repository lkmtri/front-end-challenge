import {
  UPDATE_SEARCH_STRING_ACTION,
  SEARCH_RESULT_INIT_ACTION,
  SEARCH_RESULT_RECEIVED_ACTION,
  NEXT_RESULT_INIT_ACTION,
  NEXT_RESULT_RECEIVED_ACTION,
  CLEAR_SEARCH_RESULT_ACTION,
} from '../constants'

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

export default searchStateReducer
