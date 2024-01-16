/* eslint-disable import/no-useless-path-segments */
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../.../../../content/icons/logo.svg';
import menu from '../.../../../content/icons/icon-menu.svg';
import wishlist from '../.../../../content/icons/icon-wishlist.svg';
import shoppingCart from '../.../../../content/icons/icon-shopping-cart.svg';
import { useAppContext } from '../../AppContext';

const getLinkClass = ({ isActive }) => classNames(
  'nav__link', { isActive },
);

export const TopBar = () => {
  const { goToPage } = useAppContext();

  return (
    <div className="top-bar">
      <NavLink
        to="/menu"
        className="icon--menu"
      >
        <img
          src={menu}
          alt=""
          className="icon"
        />
      </NavLink>
      <NavLink
        to="/"
        className="logo"
        onClick={goToPage}
      >
        <img
          src={logo}
          alt="Logo"
          className="logo__img"
        />
      </NavLink>

      <nav className="nav top-bar__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              className={getLinkClass}
              to="/"
              onClick={goToPage}
            >
              Головна
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={getLinkClass}
              to="/about"
              onClick={goToPage}
            >
              Про Pushkin
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={getLinkClass}
              to="/catalog"
              onClick={goToPage}
            >
              Каталог
            </NavLink>
          </li>
          <li className="nav__item">
            <ScrollLink
              className="nav__link"
              to="contacts"
              spy
              smooth
              offset={-70} // Adjust this offset according to your layout
              duration={500}
            >
              Контакти
            </ScrollLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={getLinkClass}
              to="/faq"
              onClick={goToPage}
            >
              FAQ
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="top-bar__icons">
        <NavLink
          to="/cart"
          onClick={goToPage}
        >
          <img
            src={shoppingCart}
            alt=""
            className="icon icon--shoping-cart"
          />
        </NavLink>
        <NavLink
          to="/wishlist"
          onClick={goToPage}
        >
          <img
            src={wishlist}
            alt=""
            className="icon icon--wishlist"
          />
        </NavLink>
      </div>
    </div>
  );
};
