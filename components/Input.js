import PropTypes from 'prop-types'

const Input = ({ searchString, onChange, getRef, placeholder, type }) => (
  <div>
    <input
      type={type}
      value={searchString}
      placeholder={placeholder}
      onChange={onChange}
      ref={input => getRef(input)}
    />
    <style jsx>{`
      input {
        padding: 16px 55px 16px 16px;
        width: 100%;
        height: 54px;
        font-size: 20px;
        border: none;
      }
      input:focus {
        box-shadow: 0 6px 6px rgba(0, 0, 0, 0.05);
      }
    `}</style>
  </div>
)

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  searchString: PropTypes.string,
  onChange: PropTypes.func,
  getRef: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  searchString: '',
  onChange: () => {},
  getRef: () => {},
}

export default Input
