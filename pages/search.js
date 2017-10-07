import { Component } from 'react'
import withStore from 'store'
import { PageLayout } from 'components'
import { SearchInput, SearchResults } from 'containers'
import { searchUser, updateSearchString } from 'store/actions'

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
      <PageLayout>
        <SearchInput />
        <SearchResults />
      </PageLayout>
    )
  }
}

export default withStore(Search)
