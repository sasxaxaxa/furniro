import Logo from "../../ui/Logo/Logo.jsx";
import './Header.scss'

const headerLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Shop',
    href: '/',
  },
  {
    label: 'About',
    href: '/',
  },
  {
    label: 'Contact',
    href: '/',
  },
]

const headerActions = [
  {
    label: 'icon',
    iconName: '/',
  },
  {
    label: 'icon',
    iconName: '/',
  },
  {
    label: 'icon',
    iconName: '/',
  },
  {
    label: 'icon',
    iconName: '/',
  },
]


const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Logo
          className="header__logo"
        />
        <nav className="header__nav">
          <ul className="header__nav-list">
            {headerLinks.map((link, index) => (
              <li
                key={index}
                className={`header__nav-item`}
              >
                <a
                  href={link.href}
                  className="header__nav-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__actions">
          <ul className="header__actions-list">
            {headerActions.map((action, index) => (
              <li
                key={index}
                className="header__nav-item"
              >
                {action.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>


  )
}

export default Header