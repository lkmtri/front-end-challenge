import PropTypes from 'prop-types'
import Card from './Card'

const UserInfoCard = ({ avatarUrl, login, followerCount, followingCount }) => (
  <Card style={{ height: '100px', padding: '0px' }} withHover>
    <div className="user-card__avatar" style={{ backgroundImage: `url('${avatarUrl}')` }} />
    <div className="user-card__info">
      <div className="user-card__username">{login}</div>
      <div className="user-card__social">
        <div className="user-card__social__item">
          {`Followers ${followerCount !== -1 ? followerCount : '-'}`}
        </div>
        <div className="user-card__social__item">
          {`Following ${followingCount !== -1 ? followingCount : '-'}`}
        </div>
      </div>
    </div>
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
  </Card>
)

UserInfoCard.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  followerCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
}

export default UserInfoCard
