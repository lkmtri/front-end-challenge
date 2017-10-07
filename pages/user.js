import { Component } from 'react'
import PropTypes from 'prop-types'
import withStore from 'store'
import { PageLayout } from 'components'
import { SearchInput, UserDetails } from 'containers'
import { getUserDetails } from 'store/actions'

class UserPage extends Component {
  static async getInitialProps({ query: { id }, store }) {
    if (!store.getState().users.byId[id]) {
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
      <PageLayout>
        <SearchInput />
        <UserDetails username={this.props.username} />
      </PageLayout>
    )
  }
}

export default withStore(UserPage)
