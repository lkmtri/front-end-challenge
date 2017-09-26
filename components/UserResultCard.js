import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { getUserFollowersCount, getUserFollowingCount } from 'store/actions/search'
import Card from './Card'

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
    return (
      <div role="button" tabIndex="0" onClick={this.goToUserDetailsPage}>
        <Card style={{ height: '100px', padding: '0px' }} withHover>
          <div
            className="user-card__avatar"
            style={{ backgroundImage: `url('${this.props.avatarUrl}')` }}
          />
          <div className="user-card__info">
            <div className="user-card__username">{this.props.login}</div>
            <div className="user-card__social">
              <div className="user-card__social__item">
                {`Followers ${this.props.followerCount !== -1 ? this.props.followerCount : '-'}`}
              </div>
              <div className="user-card__social__item">
                {`Following ${this.props.followingCount !== -1 ? this.props.followingCount : '-'}`}
              </div>
            </div>
          </div>
        </Card>
        <style jsx>{`
          .user-card__avatar {
            width: 100px;
            height: 100px;
            float: left;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
          }
          .user-card__info {
            width: 334px;
            max-width: calc(100vw - 116px);
            padding: 16px;
            float: left;
          }
          .user-card__username {
            font-size: 20px;
            line-height: 150%;
            letter-spacing: 2px;
            overflow: hidden;
          }
          .user-card__social {
            padding-top: 5px;
            font-size: 12px;
            line-height: 140%;
            color: #586069;
          }
          .user-card__social__item {
            height: 16px;
            overflow: hidden;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = ({ usersById }, { username }) => ({ ...usersById[username] })

export default connect(mapStateToProps, {
  getUserFollowersCount,
  getUserFollowingCount,
})(UserResultCard)
