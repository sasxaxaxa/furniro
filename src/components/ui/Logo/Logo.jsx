const title = 'Home'

const Logo = ({href = '/', className, image = false}) => {
  return (
    <a
      className={`logo ${className || ''}`}
      href={href}
      title={title}
      aria-label={title}
    >
      {image && (
        <img
          src="/icons/logo.svg"
          alt="Funiro Logo"
          width={50}
          height={32}
        />
      )}
      <span className="logo__title">Funiro</span>
    </a>
  )
}

export default Logo;