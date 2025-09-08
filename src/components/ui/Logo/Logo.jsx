const title = 'Home'

const Logo = ({href = '/', className}) => {
  const logoPath = `src/assets/logo.svg`;

  return (
    <a
      className={`logo ${className || ''}`}
      href={href}
      title={title}
      aria-label={title}
    >
      <img
        src={logoPath}
        alt="Furniro Logo"
        width={50}
        height={32}
      />
      <span className="logo__title">Furniro</span>
    </a>
  )
}

export default Logo;