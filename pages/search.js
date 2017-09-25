import { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import createStore from 'store'
import Layout from 'components/Layout'
import SearchInput from 'components/SearchInput'
import SearchResults from 'components/SearchResults'
import { searchUser, updateSearchString } from 'store/actions/search'

class Search extends Component {
  static async getInitialProps({ query: { q }, store, isServer }) {
    store.dispatch(updateSearchString(q))
    if (isServer) {
      await searchUser(q)(store.dispatch)
    }
    return {}
  }

  render() {
    return (
      <Layout>
        <SearchInput />
        <SearchResults />
      </Layout>
    )
  }
}

export default withRedux(createStore)(Search)
