const title = 'Home'

const Logo = ({href = '/'}) => {
  const logoPath = `src/assets/logo.svg`;

  return (
    <a
      href={href}
      className="logo"
      title={title}
      aria-label={title}
    >
      <img
        src={logoPath}
        alt="Furniro Logo"
        width={50}
        height={32}
      />
    </a>
  )
}

export default Logo;