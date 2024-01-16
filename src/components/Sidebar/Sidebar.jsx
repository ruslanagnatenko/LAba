import cn from 'classnames';
import { useAppContext } from '../../AppContext';

const brands = [
  'Усі',
  'Air Jordan',
  'Adidas',
  'Nike',
  'Under Armour',
];

export const SideBar = () => {
  const {
    sortBy,
    setSortBy,
    SORT_BY_PRICE,
    filter,
    setFilter,
  } = useAppContext();

  return (
    <section className="catalog__sideBar sideBar">
      <div className="sideBar__sortdBy">
        <button
          type="button"
          className="button-black"
          onClick={() => setSortBy(SORT_BY_PRICE)}
        >
          Сортувати за ціною
        </button>

        <button
          type="button"
          className={cn({
            'button-black': sortBy,
            'button-disabled': !sortBy,
          })}
          onClick={() => setSortBy('')}
        >
          Скинути сортування
        </button>
      </div>

      <div className="sideBar__nav">
        <ul className="sideBar__nav-list">
          {brands.map(brand => (
            <li
              className="sideBar__nav-item"
              key={brands.indexOf(brand)}
            >
              <button
                type="button"
                aria-label="none"
                className={cn('button-brand', {
                  'button-brand-active': filter === brand,
                })}
                onClick={() => setFilter(brand)}
              >
                {brand}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
