import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { AsyncList, Card, UserInfoRow, URL } from 'components'

class UserDetails extends Component {
  static defaultProps = {
    login: '',
    id: -1,
    gravatarId: -1,
    avatarUrl: '',
    url: '',
    htmlUrl: '',
    followersUrl: '',
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

  static propTypes = {
    login: PropTypes.string,
    id: PropTypes.number,
    avatarUrl: PropTypes.string,
    gravatarId: PropTypes.string,
    url: PropTypes.string,
    htmlUrl: PropTypes.string,
    followersUrl: PropTypes.string,
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

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const {
      login,
      id,
      avatarUrl,
      gravatarId,
      url,
      htmlUrl,
      followersUrl,
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
    } = this.props
    return (
      <div>
        {id !== -1 ? (
          <Card>
            <UserInfoRow title="login" content={login} />
            <UserInfoRow title="id" content={id} />
            <UserInfoRow title="avatarUrl" content={<URL href={avatarUrl} />} />
            <UserInfoRow title="gravatarId" content={gravatarId} />
            <UserInfoRow title="url" content={<URL href={url} />} />
            <UserInfoRow title="htmlUrl" content={<URL href={htmlUrl} />} />
            <UserInfoRow
              title="followers"
              content={
                <AsyncList
                  url={followersUrl}
                  processData={data =>
                    data.map(item => <URL href={item.htmlUrl} text={item.login} />)}
                />
              }
            />
            <UserInfoRow
              title="following"
              content={
                <AsyncList
                  url={`/users/${login}/following`}
                  processData={data =>
                    data.map(item => <URL href={item.htmlUrl} text={item.login} />)}
                />
              }
            />
            <UserInfoRow title="gistsUrl" content={<URL href={gistsUrl} />} />
            <UserInfoRow title="starredUrl" content={<URL href={starredUrl} />} />
            <UserInfoRow title="subscriptionsUrl" content={<URL href={subscriptionsUrl} />} />
            <UserInfoRow title="organizationsUrl" content={<URL href={organizationsUrl} />} />
            <UserInfoRow
              title="repos"
              content={
                <AsyncList
                  url={reposUrl}
                  processData={data =>
                    data.map(item => <URL href={item.htmlUrl} text={item.name} />)}
                />
              }
            />
            <UserInfoRow title="eventsUrl" content={<URL href={eventsUrl} />} />
            <UserInfoRow title="receveiedEventsUrl" content={<URL href={receveiedEventsUrl} />} />
            <UserInfoRow title="type" content={type} />
            <UserInfoRow title="siteAdmin" content={siteAdmin} />
            <UserInfoRow title="score" content={score} />
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
  }
}

const mapStateToProps = ({ users: { byId } }, { username }) => ({
  ...byId[username],
})

export default connect(mapStateToProps)(UserDetails)
