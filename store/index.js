import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import searchReducer from './reducers/search'

const exampleInitialState = {
  searchState: {
    searchString: '',
    loading: false,
    page: 1,
    nextPageLoading: false,
    hasNextPage: false,
  },
  usersById: {},
  usersAllId: [],
}

const reduxMiddleware = composeWithDevTools(applyMiddleware(thunkMiddleware))

export default (initialState = exampleInitialState) =>
  createStore(searchReducer, initialState, reduxMiddleware)
