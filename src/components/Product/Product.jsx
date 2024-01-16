/* eslint-disable import/no-useless-path-segments */
import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import like from './../../content/icons/like.svg';
import likeFilled from './../../content/icons/like-filled.svg';
import cardPhotos from '../../api/ProductPhotos';
import { Button } from '../../ui/Button';
import { useAppContext } from '../../AppContext';

export const Product = ({ product, productClass }) => {
  const {
    id, name, price, isNew,
  } = product;

  const location = useLocation();
  const { setProductPageLoading, scrollToTop } = useAppContext();

  // eslint-disable-next-line no-nested-ternary
  const productLink = location.pathname
    .includes('catalog/')
    ? `/catalog/${id}`
    : location.pathname.includes('catalog')
      ? `./${id}`
      : `/catalog/${id}`;

  const [likedProducts, setLikedProducts] = useState([]);

  const handleLike = useCallback(
    (productId) => {
      if (likedProducts.includes(productId)) {
        setLikedProducts(currentIds => currentIds.filter(
          currId => currId !== productId,
        ));
      } else {
        setLikedProducts(currentIds => [...currentIds, productId]);
      }
    }, [likedProducts],
  );

  return (
    <div className={`product ${productClass}`}>
      <div className="product__top">
        <a
          href="#product"
          className="product__link"
        >
          <img
            src={cardPhotos[id]}
            alt={name}
            className="product__photo"
          />
        </a>

        {isNew && (
          <div className="product__new">New</div>
        )}

        <button
          type="button"
          className="product__like"
          onClick={() => handleLike(id)}
        >
          {likedProducts.includes(id) ? (
            <img
              src={likeFilled}
              alt="like"
              className="product__like-photo"
            />
          ) : (
            <img
              src={like}
              alt="like"
              className="product__like-photo"
            />
          )}
        </button>
      </div>

      <p className="product__description">
        {name.length > 18 ? `${name.slice(0, 18)}...` : name}
      </p>

      <div className="product__bottom">
        <h3 className="product__price product__price--left">
          {`$${price}`}
        </h3>
        <Button
          text="Передзамовити"
          buttonClass="button-product-default"
          link={productLink}
          onClick={() => {
            setProductPageLoading(true);
            setTimeout(() => {
              scrollToTop();
              setProductPageLoading(false);
            }, 700);
          }}
        />
      </div>
    </div>
  );
};
