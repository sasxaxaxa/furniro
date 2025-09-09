const title = 'Home'

const Logo = ({href = '/', className, image = false}) => {
  const logoPath = `src/assets/logo.svg`;

  return (
    <a
      className={`logo ${className || ''}`}
      href={href}
      title={title}
      aria-label={title}
    >
      {image && (
        <img
          src={logoPath}
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