import PropTypes from 'prop-types'

const TimeCircle = ({number, text}) => {
  return (
    <div className='timer-circle'>
      <p className='timer-circle__number'>{number}</p>
      <p className='timer-circle__text'>{text}</p>
    </div>
  )
}

TimeCircle.propTypes = {
    number: PropTypes.string,
    text: PropTypes.string,
}

export default TimeCircle
