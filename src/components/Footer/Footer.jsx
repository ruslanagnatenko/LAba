/* eslint-disable import/no-useless-path-segments */
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import logo from './../../content/icons/logo.svg';
import facebook from './../../content/icons/facebook.svg';
import email from './../../content/icons/mail.svg';
import instagram from './../../content/icons/instagram.svg';
import { useAppContext } from '../../AppContext';

const getLinkClass = ({ isActive }) => classNames(
  'nav__link', { isActive },
);

export const Footer = () => {
  const { goToPage } = useAppContext();

  return (
    <footer className="footer">
      <a
        href="/"
        className="footer__logo-link"
      >
        <img
          src={logo}
          alt=""
          className="footer__logo"
        />
      </a>

      <nav className=" nav-bar footer__nav">
        <h3 className="nav-bar__title">
          Навігація
        </h3>
        <ul className="nav-bar__list">
          <li className="nav-bar__item">
            <NavLink
              to="/about"
              className={getLinkClass}
              onClick={goToPage}
            >
              Про Pushkin
            </NavLink>
          </li>
          <li className="nav-bar__item">
            <NavLink
              to="/catalog"
              className={getLinkClass}
              onClick={goToPage}
            >
              Каталог
            </NavLink>
          </li>
          <li className="nav-bar__item">
            <NavLink
              to="/contacts"
              className={getLinkClass}
              onClick={goToPage}
            >
              Контакти
            </NavLink>
          </li>
          <li className="nav-bar__item">
            <NavLink
              to="/help"
              className={getLinkClass}
              onClick={goToPage}
            >
              Допомога
            </NavLink>
          </li>
          <li className="nav-bar__item">
            <NavLink
              to="/faq"
              className={getLinkClass}
              onClick={goToPage}
            >
              FAQ
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav className="nav-bar nav-bar--onDesktop">
        <h3 className="nav-bar__title">
          Каталог
        </h3>

        <ul className="nav-bar__list">
          <li className="nav-bar__item">
            <a href="/" className="nav-bar__link">Air Jordan</a>
          </li>
          <li className="nav-bar__item">
            <a href="/" className="nav-bar__link">Adidas</a>
          </li>
          <li className="nav-bar__item">
            <a href="/" className="nav-bar__link">Nike</a>
          </li>
          <li className="nav-bar__item">
            <a href="/" className="nav-bar__link">Under Armour</a>
          </li>
        </ul>
      </nav>

      <nav className="nav-bar nav-bar--onDesktop">
        <h3 className="nav-bar__title">
          Контакти
        </h3>

        <ul className="nav-bar__list">
          <li className="nav-bar__item">
            <div className="nav-bar__contact-item">
              <img
                src={facebook}
                alt=""
              />

              <a href="/" className="nav-bar__link">ShopByPushkin</a>
            </div>
          </li>
          <li className="nav-bar__item">
            <div className="nav-bar__contact-item">
              <img
                src={email}
                alt=""
              />

              <a
                target="_blank"
                href="mailto:realpushkin@gmail.com"
                className="nav-bar__link"
                rel="noreferrer"
              >
                realpushkin@gmail.com
              </a>
            </div>
          </li>
          <li className="nav-bar__item">
            <div className="nav-bar__contact-item">
              <img
                src={instagram}
                alt=""
              />

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/pushkin_shop/"
                className="nav-bar__link"
              >
                pushkin_shop
              </a>
            </div>
          </li>
          <li className="nav-bar__item">
            <div className="nav-bar__contact-item">
              <img
                src={facebook}
                alt=""
              />

              <a
                href="tel:+380933471398"
                className="nav-bar__link"
              >
                +38 093 347 13 98
              </a>
            </div>
          </li>
        </ul>
      </nav>

      <div className="footer__right">
        <div className="top-bar__icons">
          <a href="/" className="icon">
            <img
              src={facebook}
              alt=""
            />
          </a>
          <a href="/" className="icon">
            <img
              src={email}
              alt=""
            />
          </a>
          <a href="/" className="icon">
            <img
              src={instagram}
              alt=""
            />
          </a>
        </div>
        <nav className="secondary-nav footer__secondary-nav">
          <ul className="secondary-nav__list">
            <li className="secondary-nav__item">
              <a href="/" className="secondary-nav__link">Умови користування</a>
            </li>
            <li className="secondary-nav__item">
              <a href="/" className="secondary-nav__link">
                Політика конфіденційності
              </a>
            </li>
            <li className="secondary-nav__item">
              <a href="/" className="secondary-nav__link">Політика cookies</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
