import PropTypes from 'prop-types'

const Button = ({ onClick, disabled, children }) => (
  <div role="button" tabIndex="0" onClick={onClick} disabled={disabled}>
    {children}
    <style jsx>{`
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 36px;
        width: 78px;
        margin: 8px 16px 16px 8px;
        background-color: #f44336;
        box-shadow: 0 2px 4px 0 rgba(211, 72, 62, 0.6);
        border: none;
        border-radius: 2px;
        color: white;
      }
      div:hover {
        background-color: #ff584c;
      }
    `}</style>
  </div>
)

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.element,
}

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  children: '',
}

export default Button
