import classnames from 'classnames';
import './Button.scss'

const Button = (props) => {
  const {
    className,
    label,
    mode,
    style,
    icon,
    href,
    ...rest
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const title = label ? label : ''
  const linkProps = { href }
  const specificProps = isLink ? linkProps : undefined


  const iconComponent = icon && (
    <img
      className="button__icon"
      src={icon}
      alt=''
    />
  )

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
      {iconComponent}
      {title}
    </Component>
  )
}

export default Button