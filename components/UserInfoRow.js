import PropTypes from 'prop-types'

const UserInfoRow = ({ title, content }) => (
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

UserInfoRow.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
}

export default UserInfoRow
