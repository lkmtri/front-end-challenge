import PropTypes from 'prop-types'

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

export default URL
