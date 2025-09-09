import Logo from "../../ui/Logo/Logo.jsx";
import './Footer.scss'
import {Link} from 'react-router-dom';
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
    items: '',
  },
]

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__inner">
        <div className="footer__first-column">
          <Logo
            className="footer__logo"
          />
          <p className="footer__address">
            400 University Drive Suite 200 Coral Gables,
            FL 33134 USA
          </p>
        </div>

        <ul className="footer__list-big">
          {footerItems.map(({column, items}, index) => (
            <li key={index}>
              <p className="footer__list-big-item">{column}</p>
              <ul className="footer__list-small">
                {Array.isArray(items) ? (
                  items.map((item, i) => (
                    <li key={i} className="footer__list-small-item">
                      <a>
                        {item}
                      </a>
                    </li>
                  ))
                ) : (
                  <li>
                    <Input />
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>


      </div>
      <div className="footer__copyright">
        <p>2023 funiro. All rights reverved</p>
      </div>
    </footer>
  )
}

export default Footer