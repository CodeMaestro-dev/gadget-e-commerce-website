import PropTypes from 'prop-types'

const Button = ({children, buttonColour}) => {
  return (
    <button className={`${buttonColour} button`}>
      {children}
    </button>
  )
}

Button.propTypes = {
    children: PropTypes.string,
    buttonColour: PropTypes.string,
}

export default Button
