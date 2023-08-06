import style from './style.module.css'
import PropTypes from 'prop-types'

const CardUser = ({ name, age, phone }) => {
  return (
    <article className={style.card}>
      <p>
        <span>Nombre:</span>
        {name}
      </p>
      <p>
        <span>Edad:</span>
        {age}
      </p>
      <p>
        <span>Telefono:</span>
        {phone}
      </p>
    </article>
  )
}

export default CardUser

/* PROPTYPES */
CardUser.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  phone: PropTypes.string,
}
