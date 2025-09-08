import classnames from 'classnames';
import './Button.scss'

const Button = (props) => {
  const {
    label,
    mode,
    style,
    icon
  } = props

  return (
    <button
      className={
        classnames(
          'button',
          `button-${mode}`,
          `button-${style}`
        )}>
      {label}
    </button>
  )
}

export default Button