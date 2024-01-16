import { Product } from '../Product';

export const YouMightAlsoLike = ({ products }) => (
  <section className="youMightAlsoLike">
    <h2 className="youMightAlsoLike__title section-title">
      Вам також може сподобатись
    </h2>

    <div className="youMightAlsoLike__products">
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          productClass="youMightAlsoLike__product"
        />
      ))}
    </div>
  </section>
);
