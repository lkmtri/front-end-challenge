import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { getUserFollowersCount, getUserFollowingCount } from 'store/actions'
import { UserInfoCard } from 'components'

class UserResultCard extends Component {
  static propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    getUserFollowersCount: PropTypes.func.isRequired,
    getUserFollowingCount: PropTypes.func.isRequired,
    followerCount: PropTypes.number,
    followingCount: PropTypes.number,
  }

  static defaultProps = {
    followingCount: -1,
    followerCount: -1,
  }

  componentDidMount() {
    this.props.getUserFollowersCount(this.props.login)
    this.props.getUserFollowingCount(this.props.login)
  }

  goToUserDetailsPage = () =>
    Router.push(`/user?id=${this.props.login}`, `/user/${this.props.login}`)

  render() {
    const { login, avatarUrl, followerCount, followingCount } = this.props
    return (
      <div role="button" tabIndex="0" onClick={this.goToUserDetailsPage}>
        <UserInfoCard
          login={login}
          avatarUrl={avatarUrl}
          followerCount={followerCount}
          followingCount={followingCount}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ users: { byId } }, { username }) => ({ ...byId[username] })

export default connect(mapStateToProps, {
  getUserFollowersCount,
  getUserFollowingCount,
})(UserResultCard)
