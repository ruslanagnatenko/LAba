import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { FILTER_BY, SORT_BY_PRICE } from './vars';
import cards from './api/Products';

export const AppContextContext = createContext({
  setProducts: () => { },
  sortBy: '',
  setSortBy: () => { },
  SORT_BY_PRICE: '',
  preparedProducts: [],
  filter: '',
  setFilter: () => { },
  preparedProductsForHomePage: [],
  currentPage: 1,
  setCurrentPage: () => { },
  productsLoading: false,
  setProductsLoading: () => { },
  productPageLoading: false,
  setProductPageLoading: () => { },
  pageLoading: false,
  setPageLoading: () => { },
  scrollToTop: () => { },
  goToPage: () => { },
  productAdded: false,
  setProductAdded: () => { },
  addedProducts: [],
  setAddedProducts: () => { },
  productCount: 1,
  setProductCount: () => { },
});

const initialCatalogProducts = cards;
const productsForHomePage = cards.slice(4, 12);

const prepareProducts = (productsToPrepare, {
  sortBy,
  filter,
}) => {
  let newProducts = [...productsToPrepare];

  if (sortBy) {
    switch (sortBy) {
      case SORT_BY_PRICE:
        newProducts = newProducts.sort(
          (product1, product2) => (
            product1.price - product2.price
          ),
        );
        break;

      default:
        return newProducts;
    }
  }

  if (filter) {
    switch (filter) {
      case FILTER_BY.Jordan:
        newProducts = newProducts.filter(
          product => product.name.toLowerCase()
            .includes(FILTER_BY.Jordan.toLowerCase()),
        );
        break;

      case FILTER_BY.Adidas:
        newProducts = newProducts.filter(
          product => product.name.toLowerCase()
            .includes(FILTER_BY.Adidas.toLowerCase()),
        );
        break;

      case FILTER_BY.Nike:
        newProducts = newProducts.filter(
          product => product.name.toLowerCase()
            .includes(FILTER_BY.Nike.toLowerCase()),
        );
        break;

      case FILTER_BY.UA:
        newProducts = newProducts.filter(
          product => product.name.toLowerCase()
            .includes(FILTER_BY.UA.toLowerCase()),
        );
        break;

      default:
        return newProducts;
    }
  }

  return newProducts;
};

const TOTAL_ITEMS = 25;
const itemsPerPage = 8;

export const AppContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('');
  const [filter, setFilter] = useState(FILTER_BY.All);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productPageLoading, setProductPageLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [productAdded, setProductAdded] = useState(false);
  const [addedProducts, setAddedProducts] = useState([]);
  const [productCount, setProductCount] = useState(1);

  const firstItem = itemsPerPage * currentPage - itemsPerPage + 1;
  const lastItem = currentPage * itemsPerPage > TOTAL_ITEMS
    ? TOTAL_ITEMS
    : currentPage * itemsPerPage;
  const visibleItems = initialCatalogProducts.slice(firstItem - 1, lastItem);

  const preparedProducts = useMemo(
    () => prepareProducts(visibleItems, {
      sortBy,
      filter,
    }), [sortBy, filter, visibleItems],
  );
  const preparedProductsForHomePage = useMemo(
    () => prepareProducts(productsForHomePage, {
      sortBy,
      filter,
    }), [sortBy, filter],
  );

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const goToPage = useCallback(
    () => {
      setPageLoading(true);
      scrollToTop();
      setTimeout(() => setPageLoading(false), 500);
    }, [],
  );

  const value = useMemo(() => (
    {
      preparedProductsForHomePage,
      preparedProducts,
      sortBy,
      setSortBy,
      SORT_BY_PRICE,
      filter,
      setFilter,
      currentPage,
      setCurrentPage,
      productsLoading,
      setProductsLoading,
      productPageLoading,
      setProductPageLoading,
      pageLoading,
      setPageLoading,
      scrollToTop,
      goToPage,
      productAdded,
      setProductAdded,
      addedProducts,
      setAddedProducts,
      productCount,
      setProductCount,
    }
  ), [
    preparedProducts,
    sortBy,
    filter,
    preparedProductsForHomePage,
    currentPage,
    productsLoading,
    productPageLoading,
    pageLoading,
    goToPage,
    productAdded,
    addedProducts,
    productCount,
  ]);

  return (
    <AppContextContext.Provider value={value}>
      {children}
    </AppContextContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContextContext);
