import { Header } from './Header/Header';
import { NewProducts } from '../../components/NewProducts';
// eslint-disable-next-line import/no-useless-path-segments
import productsFromServer from './../../api/Products';
import { Catalog } from './Catalog/Catalog';
import { Footer } from '../../components/Footer';
import { FaqContextProvider } from '../../components/FAQ/FaqContext';
import { FAQ } from '../../components/FAQ';
import { useAppContext } from '../../AppContext';
import { Loader } from '../../components/Loader';

export const HomePage = () => {
  const { pageLoading } = useAppContext();

  return (
    <div className="pageLoad">
      {pageLoading ? <Loader />
        : (
          <div className="main-container">
            <Header />

            <NewProducts
              products={productsFromServer}
            />

            <Catalog />

            <FaqContextProvider>
              <FAQ />
            </FaqContextProvider>

            <Footer />
          </div>
        )}
    </div>
  );
};
