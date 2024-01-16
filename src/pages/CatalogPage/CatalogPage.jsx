import { useAppContext } from '../../AppContext';
import { SideBar } from '../../components/Sidebar';
import { CatalogPageProducts } from './CatalogPageProducts';
// import productsFromServer from '../../api/Products';
import { Pagination } from '../../components/Pagination';
import { FAQ } from '../../components/FAQ';
import { Footer } from '../../components/Footer';
import { Loader } from '../../components/Loader';
import { FaqContextProvider } from '../../components/FAQ/FaqContext';

export const CatalogPage = () => {
  const {
    preparedProducts,
    currentPage,
    setCurrentPage,
    pageLoading,
  } = useAppContext();

  return (
    <div className="pageLoad">
      {pageLoading ? <Loader />
        : (
          <div className="main-container">
            <div className="catalogPage">
              <p className="section-title">
                Каталог
              </p>
              <SideBar />

              <CatalogPageProducts products={preparedProducts} />

              <Pagination
                total={25}
                itemsPerPage={8}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>

            <FaqContextProvider>
              <FAQ />
            </FaqContextProvider>

            <Footer />
          </div>
        )}
    </div>
  );
};
