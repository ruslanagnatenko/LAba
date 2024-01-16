import { Product } from '../../../../components/Product';

export const CatalogProducts = ({ products }) => {
  return (
    <div className="catalog__products">
      {!products.length && (
        <h2 className="catalog__title-no-products">
          Перейти до
          {' '}
          <a
            href="#catalog"
            className="catalog__link-no-products"
          >
            каталогу
          </a>
          {' '}
          і подивитися більше
        </h2>
      )}

      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          productClass="catalog__product"
        />
      ))}
    </div>
  );
};
