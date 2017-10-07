import {
  fetchUserSearchResult,
  fetchUserDetails,
  fetchUserFollowers,
  fetchUserFollowing,
} from 'services'
import {
  UPDATE_SEARCH_STRING_ACTION,
  SEARCH_RESULT_INIT_ACTION,
  SEARCH_RESULT_RECEIVED_ACTION,
  ADD_USER_DETAILS_ACTION,
  ADD_USER_FOLLOWING_COUNT_ACTION,
  ADD_USER_FOLLOWER_COUNT_ACTION,
  NEXT_RESULT_INIT_ACTION,
  NEXT_RESULT_RECEIVED_ACTION,
} from '../constants'

const dispatchSearchUserAction = dispatch => ({ data }) =>
  dispatch({
    type: SEARCH_RESULT_RECEIVED_ACTION,
    payload: data.items,
  })

const dispatchNextSearchResultsAction = dispatch => ({ data }) =>
  dispatch({
    type: NEXT_RESULT_RECEIVED_ACTION,
    payload: data.items,
  })

const dispatchUserDetails = dispatch => ({ data }) =>
  dispatch({
    type: ADD_USER_DETAILS_ACTION,
    payload: data,
  })

const dispatchUserFollowersCountAction = dispatch => username => ({ data }) =>
  dispatch({
    type: ADD_USER_FOLLOWER_COUNT_ACTION,
    payload: data.length,
    username,
  })

const dispatchUserFollowingCountAction = dispatch => username => ({ data }) =>
  dispatch({
    type: ADD_USER_FOLLOWING_COUNT_ACTION,
    payload: data.length,
    username,
  })

const updateSearchString = searchString => ({
  type: UPDATE_SEARCH_STRING_ACTION,
  payload: searchString,
})

const searchUser = searchString => (dispatch) => {
  dispatch({
    type: SEARCH_RESULT_INIT_ACTION,
    payload: searchString,
  })
  return (
    fetchUserSearchResult(searchString)
      .then(dispatchSearchUserAction(dispatch))
      // clear loading status if there's error
      .catch(() => dispatchSearchUserAction(dispatch)({ data: { items: [] } }))
  )
}

const getUserDetails = username => dispatch =>
  fetchUserDetails(username)
    .then(dispatchUserDetails(dispatch))
    .catch(err => console.error(err))

const loadNextSearchResults = () => (dispatch, getState) => {
  dispatch({
    type: NEXT_RESULT_INIT_ACTION,
  })
  const { searchString, page } = getState().searchState
  fetchUserSearchResult(searchString, page)
    .then(dispatchNextSearchResultsAction(dispatch))
    // clear loading status if there's error
    .catch(() => dispatchNextSearchResultsAction(dispatch)({ data: { items: [] } }))
}

const getUserFollowersCount = username => dispatch =>
  fetchUserFollowers(username).then(dispatchUserFollowersCountAction(dispatch)(username))

const getUserFollowingCount = username => dispatch =>
  fetchUserFollowing(username).then(dispatchUserFollowingCountAction(dispatch)(username))

export {
  searchUser,
  getUserDetails,
  getUserFollowersCount,
  getUserFollowingCount,
  loadNextSearchResults,
  updateSearchString,
}
