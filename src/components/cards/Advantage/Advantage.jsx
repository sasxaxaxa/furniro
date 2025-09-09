import './Advantage.scss'

const Advantages = (props) => {
  const {
    icon,
    title,
    description
  } = props


  return (
    <div className="advantage">
      <div className="advantage__icon">
        {icon}
      </div>
      <div className="advantage__info">
        <h3 className="advantage__title">
          {title}
        </h3>
        <p className="advantage__description">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Advantages