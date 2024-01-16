/* eslint-disable import/no-useless-path-segments */
import { NavLink, useNavigate } from 'react-router-dom';
import logo from './../../content/icons/logo.svg';
import close from './../../content/icons/x.svg';
import facebook from './../../content/icons/facebook.svg';
import email from './../../content/icons/mail.svg';
import instagram from './../../content/icons/instagram.svg';
import { useAppContext } from '../../AppContext';

export const Menu = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const { goToPage } = useAppContext();

  return (
    <aside className="menu">
      <div className="wrapper">
        <div className="top-bar menu__top">
          <NavLink
            to="/"
            className="top-bar__logo-link"
            onClick={goToPage}
          >
            <img
              src={logo}
              alt="MyBike logo"
              className="top-bar__logo"
            />
          </NavLink>
          <NavLink
            to="/"
            className="icon icon--close"
            onClick={handleBack}
          >
            <img
              src={close}
              alt="close"
            />
          </NavLink>
        </div>
        <div className="menu__content">
          <nav className="nav menu__nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  className="nav__link"
                  to="/"
                  onClick={goToPage}
                >
                  Головна
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  className="nav__link"
                  to="/about"
                  onClick={goToPage}
                >
                  Про Pushkin
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  className="nav__link"
                  to="/catalog"
                  onClick={goToPage}
                >
                  Каталог
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  className="nav__link"
                  to="/contacts"
                  onClick={goToPage}
                >
                  Контакти
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  className="nav__link"
                  to="/faq"
                  onClick={goToPage}
                >
                  FAQ
                </NavLink>
              </li>
            </ul>
          </nav>

          <NavLink to="tel:+1 234 5555-55-55" className="menu__phone-number">
            +1 234 5555-55-55
          </NavLink>

          <div className="top-bar__icons">
            <NavLink to="facebook.com" className="icon icon--facebook">
              <img
                src={facebook}
                alt="facebook"
              />
            </NavLink>
            <NavLink to="mailto:pushkin@gmail.com" className="icon icon--email">
              <img
                src={email}
                alt="email"
              />
            </NavLink>
            <NavLink to="instagram.com" className="icon icon--instagram">
              <img
                src={instagram}
                alt="instagram"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </aside>
  );
};
