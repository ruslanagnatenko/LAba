import cardPhotos from '../../api/ProductPhotos';
import { Button } from '../../ui/Button';
import close from '../../content/icons/x.svg';
import { useAppContext } from '../../AppContext';

export const ProductPageAlert = ({ product }) => {
  const { id, name, price } = product;

  const { setProductAdded, goToPage } = useAppContext();

  return (
    <div className="productPageAlert">
      <div className="productPageAlert__icon-wrap">
        <button
          type="button"
          className="productPageAlert__close-button"
          onClick={() => setProductAdded(false)}
        >
          <img
            src={close}
            alt="closeIcon"
            className="productPageAlert__icon"
          />
        </button>
      </div>

      <div className="productPageAlert__header">
        <div className="productPageAlert__title">
          Товар доданий до кошика.
        </div>
        <img
          src={cardPhotos[id]}
          alt={name}
          className="productPageAlert__photo"
        />
      </div>

      <div className="productPageAlert__description">
        <p className="productPageAlert__name">
          {name}
        </p>

        <p className="productPageAlert__price">
          {`$${price}`}
        </p>
      </div>

      <div className="productPageAlert__buttons">
        <Button
          link="/cart"
          buttonClass="productPageAlert__btn-red"
          text="Перейти до кошика"
          onClick={goToPage}
        />

        <button
          type="button"
          className="productPageAlert__btn-black"
          onClick={() => setProductAdded(false)}
        >
          Продовжити покупку
        </button>
      </div>
    </div>
  );
};
