import { useAppContext } from '../../../AppContext';
import { SideBar } from '../../../components/Sidebar';
import { Button } from '../../../ui/Button';
import { CatalogProducts } from './CatalogProducts';

export const Catalog = () => {
  const { preparedProductsForHomePage, goToPage } = useAppContext();

  return (
    <section className="catalog" id="catalog">
      <h2 className="catalog__title section-title">
        Каталог
      </h2>
      <SideBar />

      <CatalogProducts products={preparedProductsForHomePage} />

      <Button
        link="/catalog"
        buttonClass="catalog__see-more"
        onClick={goToPage}
        text="Показати більше товарів"
      />
    </section>
  );
};
