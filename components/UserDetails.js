import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Card from './Card'
import AsyncList from './AsyncList'

const UserInfo = ({ title, content }) => (
  <div className="user-info">
    <div className="title">{title}</div>
    <div className="content">{content}</div>
    <style jsx>{`
      .user-info {
        overflow: auto;
        font-size: 12px;
        padding: 12px 0px;
        border-bottom: 1px #dddddd solid;
      }
      .title {
        float: left;
        width: 30%;
        word-wrap: break-word;
        padding-right: 8px;
      }
      .content {
        float: left;
        width: 70%;
        word-wrap: break-word;
      }
    `}</style>
  </div>
)

UserInfo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
}

const URL = ({ href, text }) => (
  <a href={href}>
    {text !== '' ? text : href}
    <style jsx>{`
      a {
        color: #39cccc;
        display: block;
      }
    `}</style>
  </a>
)

URL.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
}

URL.defaultProps = {
  text: '',
}

const UserDetails = ({
  login,
  id,
  avatarUrl,
  gravatarId,
  url,
  htmlUrl,
  followersUrl,
  followingUrl,
  gistsUrl,
  starredUrl,
  subscriptionsUrl,
  organizationsUrl,
  reposUrl,
  eventsUrl,
  receveiedEventsUrl,
  type,
  siteAdmin,
  score,
}) => (
  <div>
    {id !== -1 ? (
      <Card>
        <UserInfo title="login" content={login} />
        <UserInfo title="id" content={id} />
        <UserInfo title="avatarUrl" content={<URL href={avatarUrl} />} />
        <UserInfo title="gravatarId" content={gravatarId} />
        <UserInfo title="url" content={<URL href={url} />} />
        <UserInfo title="htmlUrl" content={<URL href={htmlUrl} />} />
        <UserInfo
          title="followers"
          content={
            <AsyncList
              url={followersUrl}
              processData={data => data.map(item => <URL href={item.htmlUrl} text={item.login} />)}
            />
          }
        />
        <UserInfo
          title="following"
          content={
            <AsyncList
              url={`/users/${login}/following`}
              processData={data => data.map(item => <URL href={item.htmlUrl} text={item.login} />)}
            />
          }
        />
        <UserInfo title="gistsUrl" content={<URL href={gistsUrl} />} />
        <UserInfo title="starredUrl" content={<URL href={starredUrl} />} />
        <UserInfo title="subscriptionsUrl" content={<URL href={subscriptionsUrl} />} />
        <UserInfo title="organizationsUrl" content={<URL href={organizationsUrl} />} />
        <UserInfo
          title="repos"
          content={
            <AsyncList
              url={reposUrl}
              processData={data => data.map(item => <URL href={item.htmlUrl} text={item.name} />)}
            />
          }
        />
        <UserInfo title="eventsUrl" content={<URL href={eventsUrl} />} />
        <UserInfo title="receveiedEventsUrl" content={<URL href={receveiedEventsUrl} />} />
        <UserInfo title="type" content={type} />
        <UserInfo title="siteAdmin" content={siteAdmin} />
        <UserInfo title="score" content={score} />
      </Card>
    ) : (
      <Card>Error loading user details. Try again in a few moment.</Card>
    )}

    <style jsx>{`
      div {
        padding-top: 72px;
      }
    `}</style>
  </div>
)

UserDetails.propTypes = {
  login: PropTypes.string,
  id: PropTypes.number,
  avatarUrl: PropTypes.string,
  gravatarId: PropTypes.string,
  url: PropTypes.string,
  htmlUrl: PropTypes.string,
  followersUrl: PropTypes.string,
  followingUrl: PropTypes.string,
  gistsUrl: PropTypes.string,
  starredUrl: PropTypes.string,
  subscriptionsUrl: PropTypes.string,
  organizationsUrl: PropTypes.string,
  reposUrl: PropTypes.string,
  eventsUrl: PropTypes.string,
  receveiedEventsUrl: PropTypes.string,
  type: PropTypes.string,
  siteAdmin: PropTypes.bool,
  score: PropTypes.number,
}

UserDetails.defaultProps = {
  login: '',
  id: -1,
  gravatarId: -1,
  avatarUrl: '',
  url: '',
  htmlUrl: '',
  followersUrl: '',
  followingUrl: '',
  gistsUrl: '',
  starredUrl: '',
  subscriptionsUrl: '',
  organizationsUrl: '',
  reposUrl: '',
  eventsUrl: '',
  receveiedEventsUrl: '',
  type: '',
  siteAdmin: '',
  score: 0,
}

const mapStateToProps = ({ usersById }, { username }) => ({
  ...usersById[username],
})

export default connect(mapStateToProps)(UserDetails)
