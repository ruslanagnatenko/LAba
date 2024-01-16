import { useAppContext } from '../../../AppContext';
import { Loader } from '../../../components/Loader';
import { Product } from '../../../components/Product';

export const CatalogPageProducts = ({ products }) => {
  const { productsLoading } = useAppContext();

  return (
    <div className="catalogPage__products">
      {productsLoading && <Loader />}
      {!products.length && (
        <h2 className="catalog__title-no-products">
          Нажаль, нема товарів за такою категорією
        </h2>
      )}

      {!productsLoading && products.map(product => (
        <Product
          key={product.id}
          product={product}
          productClass="catalog__product"
        />
      ))}
    </div>
  );
};
