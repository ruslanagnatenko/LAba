import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bulma';

import './styles/App.scss';

import { TopBar } from './components/TopBar';
import { HomePage } from './pages/HomePage';
import { Menu } from './pages/Menu';
import { About } from './pages/About';
import { CatalogPage } from './pages/CatalogPage';
import { ProductPage } from './pages/ProductPage';
import { ShoppingCart } from './pages/ShoppingCart';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div>
      <div className="main-container">
        <TopBar />
      </div>

      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="menu">
            <Route index element={<Menu />} />
            <Route
              path="contacts"
              element={
                (
                  <div className="main-container">
                    <Footer />
                  </div>
                )
              }
            />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="catalog">
            <Route index element={<CatalogPage />} />
            <Route path=":productId?" element={<ProductPage />} />
          </Route>
          <Route path="cart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
