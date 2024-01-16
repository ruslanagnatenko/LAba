import cn from 'classnames';
import { getNumbers } from '../../helpers';
import { useAppContext } from '../../AppContext';

export const Pagination = ({
  total,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const pagesCount = getNumbers(1, (Math.ceil(total / itemsPerPage)));
  const isFirstPage = currentPage === pagesCount[0];
  const isLastPage = currentPage === pagesCount.length;

  const { setProductsLoading } = useAppContext();

  const goToNextPage = () => {
    return !isLastPage
      ? onPageChange(currentPage + 1)
      : currentPage;
  };

  const backToPreviousPage = () => {
    return !isFirstPage
      ? onPageChange(currentPage - 1)
      : currentPage;
  };

  return (
    <ul className="pages">
      <li>
        <button
          type="button"
          className={cn('button-brand', {
            buttonDisabled: isFirstPage,
          })}
          aria-disabled={isFirstPage}
          onClick={() => backToPreviousPage()}
        >
          «
        </button>
      </li>
      {pagesCount.map(pageNumber => (
        <li
          key={pageNumber}
        >
          <button
            type="button"
            className={cn('button-brand', {
              isActive: currentPage === pageNumber,
            })}
            onClick={() => {
              setTimeout(() => {
                setProductsLoading(true);
              });
              onPageChange(pageNumber);
              setTimeout(() => {
                setProductsLoading(false);
              }, 500);
            }}
          >
            {pageNumber}
          </button>
        </li>
      ))}
      <li>
        <button
          type="button"
          className={cn('button-brand', {
            buttonDisabled: isLastPage,
          })}
          aria-disabled={isLastPage}
          onClick={() => goToNextPage()}
        >
          »
        </button>
      </li>
    </ul>
  );
};
