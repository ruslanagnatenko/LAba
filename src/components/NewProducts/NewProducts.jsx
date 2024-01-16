import { Product } from '../Product';

export const NewProducts = ({ products }) => (
  <section className="new" id="new">
    <h2 className="new__title section-title">
      Нові надходження
    </h2>

    <div className="new__products">
      {products.slice(0, 4).map(product => (
        <Product
          key={product.id}
          product={product}
          productClass="new__product"
        />
      ))}
    </div>
  </section>
);
