import Logo from "../../ui/Logo/Logo.jsx";
import './Header.scss'
import Button from "../../ui/Button/Button.jsx";
import { Link } from 'react-router-dom';

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

const actionsLinks = [
  {
    mode: 'transparent',
    icon: 'src/assets/icons/account.svg',
    href: '/',
  },
  {
    mode: 'transparent',
    icon: 'src/assets/icons/search.svg',
    href: '/',
  },
  {
    mode: 'transparent',
    icon: 'src/assets/icons/heart.svg',
    href: '/',
  },
  {
    mode: 'transparent',
    icon: 'src/assets/icons/shopping-cart.svg',
    href: '/',
  }
]

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Logo
          className="header__logo"
          image={true}
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
            {actionsLinks.map((action, index) => (
              <li
                key={index}
                className="header__actions-item"
              >
                <Button
                  mode={action.mode}
                  style='header-action'
                  icon={action.icon}
                  href={action.href}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>


  )
}

export default Header