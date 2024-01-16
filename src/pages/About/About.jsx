import { NewProducts } from '../../components/NewProducts';
import { AboutCards } from './AboutCards/AboutCards';
import { AboutHeader } from './AboutHeader/AboutHeader';
import productsFromServer from '../../api/Products';
import { FaqContextProvider } from '../../components/FAQ/FaqContext/FaqContext';
import { FAQ } from '../../components/FAQ';
import { Footer } from '../../components/Footer';
import { useAppContext } from '../../AppContext';
import { Loader } from '../../components/Loader';

export const About = () => {
  const { pageLoading } = useAppContext();

  return (
    <div className="pageLoad">
      {pageLoading ? <Loader />
        : (
          <div className="main-container">
            <div className="about">
              <div className="about__content">
                <AboutHeader />
                <AboutCards />
              </div>
            </div>

            <NewProducts products={productsFromServer} />
            <FaqContextProvider>
              <FAQ />
            </FaqContextProvider>

            <Footer />
          </div>
        )}
    </div>
  );
};
