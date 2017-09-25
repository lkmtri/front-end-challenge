import fetch from 'utils/fetch'

const fetchUserSearchResult = (username, page = 1, perPage = 10) =>
  fetch.get(`/search/users?q=${username}&page=${page}&per_page=${perPage}`)

const fetchUserDetails = username => fetch.get(`/users/${username}`)

const fetchUserFollowers = username => fetch.get(`/users/${username}/followers`)

const fetchUserFollowing = username => fetch.get(`/users/${username}/following`)

export { fetchUserSearchResult, fetchUserDetails, fetchUserFollowers, fetchUserFollowing }
