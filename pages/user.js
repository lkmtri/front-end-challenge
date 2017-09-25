import { Component } from 'react'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'
import createStore from 'store'
import Layout from 'components/Layout'
import SearchInput from 'components/SearchInput'
import UserDetails from 'components/UserDetails'
import { getUserDetails } from 'store/actions/search'

class UserPage extends Component {
  static async getInitialProps({ query: { id }, store }) {
    if (!store.getState().usersById[id]) {
      await getUserDetails(id)(store.dispatch)
    }
    return {
      username: id,
    }
  }

  static propTypes = {
    username: PropTypes.string.isRequired,
  }

  render() {
    return (
      <Layout>
        <SearchInput />
        <UserDetails username={this.props.username} />
      </Layout>
    )
  }
}

export default withRedux(createStore)(UserPage)
