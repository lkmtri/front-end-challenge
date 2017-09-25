import PropTypes from 'prop-types'

const Card = ({ children, withHover, style }) => (
  <div className={withHover ? 'with-hover' : ''} style={style}>
    {children}
    <style jsx>{`
      div {
        width: 450px;
        max-width: calc(100vw - 16px);
        margin: 8px auto;
        background-color: #fff;
        padding: 16px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
      }
      div:focus,
      .with-hover:hover {
        box-shadow: 0 6px 6px rgba(0, 0, 0, 0.05);
      }
      .with-hover:hover {
        cursor: pointer;
      }
    `}</style>
  </div>
)

Card.propTypes = {
  children: PropTypes.element.isRequired,
  withHover: PropTypes.bool,
  style: PropTypes.object,
}

Card.defaultProps = {
  withHover: false,
  style: {},
}

export default Card
