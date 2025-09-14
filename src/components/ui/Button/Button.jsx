import classnames from 'classnames';
import './Button.scss'

const Button = (props) => {
  const {
    className,
    label,
    mode,
    style,
    href,
    icon,
    iconPosition = 'after',
    ...rest
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const title = label ? label : ''
  const linkProps = { href }
  const specificProps = isLink ? linkProps : undefined


  const iconComponent = typeof icon === 'string'
    ? <img className="button__icon" src={icon} alt="" />
    : icon

  return (
    <Component
      className={
        classnames(
          className,
          'button',
          `button-${mode}`,
          `button-${style}`
        )}
      title={title}
      aria-label={title}
      {...specificProps}
      {...rest}
    >
      {iconPosition === 'after' && iconComponent}
      {title}
      {iconPosition === 'before' && iconComponent}
    </Component>
  )
}

export default Button