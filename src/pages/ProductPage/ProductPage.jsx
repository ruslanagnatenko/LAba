import { NavLink, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useState } from 'react';
import productsFromServer from '../../api/Products';
import cardPhotos from '../../api/ProductPhotos';
import arrow from '../../content/icons/arrow-right.svg';
import { Accordeon } from '../../components/Accordeon';
import shoppingCart from '../../content/icons/shopping-cart.svg';
import heart from '../../content/icons/heart.svg';
import { YouMightAlsoLike } from '../../components/YouMightAlsoLike';
import { FAQ } from '../../components/FAQ';
import { Footer } from '../../components/Footer';
import { useAppContext } from '../../AppContext';
import { Loader } from '../../components/Loader';
import { FaqContextProvider } from '../../components/FAQ/FaqContext';
import { ProductPageAlert } from '../../components/ProductPageAlert';

export const ProductPage = () => {
  const { productId } = useParams();

  const normalProductId = productId ? +productId : 0;

  const product = productsFromServer.find(
    productFromServer => productFromServer.id === normalProductId,
  );

  const [productSize, setProductSize] = useState('36');
  const [btnLoading, setBtnLoading] = useState(false);

  const youMightAlsoLikeProducts = productsFromServer.filter(
    productFromServer => productFromServer.name.toLowerCase()
      .includes(product.name.toLowerCase().split(' ').slice(0, 1).join(''))
      && productFromServer.name.toLowerCase() !== product.name.toLowerCase(),
  );

  const {
    productPageLoading,
    setProductAdded,
    productAdded,
    setAddedProducts,
    addedProducts,
  } = useAppContext();

  const handleClick = (productToAdd, sizeOfProduct) => {
    setBtnLoading(true);

    setTimeout(() => {
      setProductAdded(true);
      if (addedProducts.find(productToFind => (
        productToFind.id === productToAdd.id
      ))) {
        const productTochangeIndex = addedProducts.findIndex(
          productToFind => productToFind.id === productToAdd.id,
        );

        setAddedProducts(currProducts => {
          const updatedProducts = [...currProducts];

          updatedProducts[productTochangeIndex] = {
            ...updatedProducts[productTochangeIndex],
            count: updatedProducts[productTochangeIndex].count + 1,
          };

          return updatedProducts;
        });
      } else {
        setAddedProducts(currentProducts => {
          return [
            ...currentProducts,
            { ...productToAdd, size: sizeOfProduct, count: 1 },
          ];
        });
      }

      setBtnLoading(false);
    }, 500);

    setTimeout(() => setProductAdded(false), 5000);
  };

  return (
    <div className="pageLoad">
      {productPageLoading ? <Loader />
        : (
          <div className="main-container">
            <div className="productPage">
              <div className="productPage__content">
                <div className="productPage__navigation navigation">
                  <NavLink
                    className="secondaryText"
                    to="/"
                  >
                    Головна
                  </NavLink>
                  <img src={arrow} alt="arrow" />
                  <NavLink
                    className="secondaryText"
                    to=".."
                  >
                    Каталог
                  </NavLink>
                  <img src={arrow} alt="arrow" />
                  <NavLink
                    className="secondaryText has-text-danger"
                  >
                    {product.name}
                  </NavLink>
                </div>
                <div className="productPage__main">
                  <h1 className="productPage__title">
                    {product.name}
                  </h1>

                  <img
                    src={cardPhotos[product.id]}
                    alt=""
                    className="productPage__photo"
                  />

                  <div className="productPage__section">
                    <p className="secondaryText">
                      Ціна
                    </p>
                    <p className="productPage__title">
                      {`$${product.price}`}
                    </p>
                  </div>

                  <div className="productPage__section">
                    <p className="secondaryText">
                      {`Розмір ${productSize}`}
                    </p>
                    <div className="productPage__sizes">
                      {[36, 37, 38, 39, 40, 41, 42].map(
                        size => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setProductSize(size.toString())}
                            className={classNames({
                              'button-black': productSize === size.toString(),
                              'button-grey': productSize !== size.toString(),
                            })}
                          >
                            {size}
                          </button>
                        ),
                      )}
                    </div>
                  </div>

                  <Accordeon />

                  <div className="productPage__buttons">
                    <button
                      type="button"
                      className="buy"
                      onClick={() => handleClick(product, productSize)}
                      disabled={productAdded}
                    >
                      {btnLoading ? (
                        <Loader />
                      ) : (
                        <>
                          <img
                            src={shoppingCart}
                            alt="shoppingCart"
                            className="productPage__button-icon"
                          />
                          До кошика
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      className="wishlist-button"
                      disabled={productAdded}
                    >
                      <img
                        src={heart}
                        alt="shoppingCart"
                        className="productPage__button-icon"
                      />
                      До обраних
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {productAdded && (
              <ProductPageAlert
                product={product}
              />
            )}

            {youMightAlsoLikeProducts.length > 0
              && <YouMightAlsoLike products={youMightAlsoLikeProducts} />}

            <FaqContextProvider>
              <FAQ />
            </FaqContextProvider>

            <Footer />
          </div>
        )}
    </div>
  );
};
