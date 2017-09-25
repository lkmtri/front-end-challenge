import PropTypes from 'prop-types'

const Spinner = ({ style }) => (
  <div style={style}>
    <style jsx>{`
      div {
        height: 22px;
        width: 22px;
        position: absolute;
        right: 20px;
        top: 24px;
        border-top: 3px #7fdbff solid;
        border-right: 3px #39cccc solid;
        border-bottom: 3px #01ff70 solid;
        border-left: 3px #ffdc00 solid;
        border-radius: 50%;
        animation: rotate 0.7s infinite linear;
      }

      @keyframes rotate {
        from {
          transform: rotate(0deg);
          transform-origin: 50% 50%;
        }
        to {
          transform: rotate(360deg);
          transform-origin: 50% 50%;
        }
      }
    `}</style>
  </div>
)

Spinner.propTypes = {
  style: PropTypes.object,
}

Spinner.defaultProps = {
  style: {},
}

export default Spinner
