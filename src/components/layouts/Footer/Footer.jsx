import Logo from "../../ui/Logo/Logo.jsx";
import './Footer.scss'
import Input from "../../ui/Input/Input.jsx";

const footerItems = [
  {
    column: 'Links',
    items: [
      'Home',
      'Shop',
      'About',
      'Contact',
    ]
  },
  {
    column: 'Help',
    items: [
      'Payment Options',
      'Returns',
      'Privacy Policies',
    ]
  },
  {
    column: 'Newsletter',
    field: <Input/>
  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__first-column">
          <Logo
            className="footer__logo"
          />
          <p className="footer__address">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </p>
        </div>
        <nav className="footer__menu">
          {footerItems.map(({ column, items, field }, index) => (
            <div className="footer__menu-column" key={index}>
              <h3 className="footer__menu-title">{column}</h3>
              {items?.length > 0 && (
                <ul className="footer__menu-list">
                  {items.map((item, index) => (
                    <li key={index}>
                      <a className="footer__menu-link">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {field && (
                field
              )}
            </div>
          ))}
        </nav>


      </div>
      <div className="footer__copyright">
        <p>2023 funiro. All rights reverved</p>
      </div>
    </footer>
  )
}

export default Footer