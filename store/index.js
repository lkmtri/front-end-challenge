import withRedux from 'next-redux-wrapper'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

const initialAppState = {
  searchState: {
    searchString: '',
    loading: false,
    page: 1,
    nextPageLoading: false,
    hasNextPage: false,
  },
  users: {
    byId: {},
    allIds: [],
  },
}

const reduxMiddleware = composeWithDevTools(applyMiddleware(thunkMiddleware))

export default wrappedComponent =>
  withRedux((initialState = initialAppState) =>
    createStore(reducers, initialState, reduxMiddleware),
  )(wrappedComponent)
