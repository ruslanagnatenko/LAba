import { useAppContext } from '../../AppContext';
import { ConfirmOrderForm } from '../../components/ConfirmOrderForm';
import { Loader } from '../../components/Loader';
import { ShoppingCartProduct } from '../../components/ShoppingCartProduct';

export const ShoppingCart = () => {
  const {
    pageLoading,
    addedProducts,
  } = useAppContext();

  // eslint-disable-next-line no-nested-ternary
  const sum = addedProducts.length
    ? addedProducts.reduce((accumulator, currentProduct) => {
      const productValue = currentProduct.price * currentProduct.count;

      return accumulator + productValue;
    }, 0)
    : 0;
  const productsAmount = addedProducts.length;

  return (
    <div className="pageLoad">
      {pageLoading ? (
        <Loader />
      ) : (
        <div className="main-container">
          <div className="shoppingCart">
            <h3 className="shoppingCart__title section-title">
              Кошик
            </h3>

            {!addedProducts.length ? (
              <p
                className="shoppingCart__no-products-text"
              >
                Кошик наразі пустий
              </p>
            ) : (
              <div className="shoppingCart__products">
                {addedProducts.map(product => (
                  <ShoppingCartProduct key={product.id} product={product} />
                ))}
              </div>
            )}

            {addedProducts.length > 0 && (
              <ConfirmOrderForm
                sum={addedProducts.length > 1
                  ? sum : addedProducts[0].price * addedProducts[0].count}
                productsAmount={productsAmount}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
