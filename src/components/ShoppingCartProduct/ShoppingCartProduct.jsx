import { useAppContext } from '../../AppContext';
import cardPhotos from '../../api/ProductPhotos';
import close from '../../content/icons/x-grey.svg';

export const ShoppingCartProduct = ({ product }) => {
  const {
    id,
    name,
    price,
    size,
    count,
  } = product;
  const { setAddedProducts, addedProducts } = useAppContext();

  const productTochangeIndex = addedProducts.findIndex(
    productToFind => productToFind.id === id,
  );

  const increaseCount = () => {
    setAddedProducts(currProducts => {
      const updatedProducts = [...currProducts];

      updatedProducts[productTochangeIndex] = {
        ...updatedProducts[productTochangeIndex],
        count: updatedProducts[productTochangeIndex].count + 1,
      };

      return updatedProducts;
    });
  };

  const decreaseCount = () => {
    setAddedProducts(currProducts => {
      const updatedProducts = [...currProducts];

      updatedProducts[productTochangeIndex] = {
        ...updatedProducts[productTochangeIndex],
        count: updatedProducts[productTochangeIndex].count - 1,
      };

      return updatedProducts;
    });
  };

  const deleteProduct = () => setAddedProducts(currentProducts => (
    currentProducts.filter(currentProduct => currentProduct.id !== id)
  ));

  return (
    <div className="shoppingCartProduct">
      <div className="shoppingCartProduct__header">
        <img
          src={cardPhotos[id]}
          alt={name}
          className="shoppingCartProduct__photo"
        />

        <div className="shoppingCartProduct__counters non-visible-on-desctop">
          <button
            type="button"
            className="shoppingCartProduct__counter"
            onClick={decreaseCount}
            disabled={count === 1}
          >
            -
          </button>
          <p className="shoppingCartProduct__count">
            {count}
          </p>
          <button
            type="button"
            className="shoppingCartProduct__counter"
            onClick={increaseCount}
          >
            +
          </button>
        </div>
      </div>

      <div className="shoppingCartProduct__body">
        <div className="shoppingCartProduct__description-wrapper">
          <h3 className="shoppingCartProduct__name">
            {name}
          </h3>
          <p className="shoppingCartProduct__size">
            {`Розмір: ${size}`}
          </p>
        </div>

        <div
          className="shoppingCartProduct__price-section non-visible-on-mobile"
        >
          <p className="bodyText">
            Ціна
          </p>

          <p className="shoppingCartProduct__price">
            {`$${price}`}
          </p>
        </div>
      </div>

      <div className="shoppingCartProduct__end">
        <button
          type="button"
          className="shoppingCartProduct__button-close"
          onClick={deleteProduct}
        >
          <img
            src={close}
            alt="close"
            className="shoppingCartProduct__close"
          />
        </button>

        <p className="shoppingCartProduct__price non-visible-on-desctop">
          {`$${price}`}
        </p>

        <div className="non-visible-on-mobile shoppingCartProduct__counters">
          <button
            type="button"
            className="shoppingCartProduct__counter"
            onClick={decreaseCount}
            disabled={count === 1}
          >
            -
          </button>
          <p className="shoppingCartProduct__count">
            {count}
          </p>
          <button
            type="button"
            className="shoppingCartProduct__counter"
            onClick={increaseCount}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
