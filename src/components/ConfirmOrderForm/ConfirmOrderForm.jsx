import visa from '../../content/icons/visa.svg';
import gPay from '../../content/icons/googlePay.svg';
import masterCard from '../../content/icons/masterCard.svg';
import payU from '../../content/icons/payU.svg';

export const ConfirmOrderForm = ({ sum, productsAmount }) => {
  const deliveryCost = 2;

  return (
    <div className="confirmOrderForm">
      <p className="confirmOrderForm__link">
        Повернутися назад до каталогу
      </p>

      <div className="confirmOrderForm__main-body">
        <div className="confirmOrderForm__title-summary">
          В підсумку
        </div>

        <div className="confirmOrderForm__order-info">
          <div className="confirmOrderForm__order-info-section">
            <p
              className="productsAmount__info-title"
            >
              {`Кількість товарів(${productsAmount})`}
            </p>

            <p className="confirmOrderForm__price">
              {`$${sum}`}
            </p>
          </div>
          <div className="confirmOrderForm__order-info-section">
            <p
              className="productsAmount__info-title"
            >
              Доставка НП
            </p>

            <p className="confirmOrderForm__price">
              {`$${deliveryCost}`}
            </p>
          </div>
          <div className="confirmOrderForm__order-info-section">
            <p
              className="productsAmount__info-title"
            >
              Загальна сумма з ПДВ
            </p>

            <p className="confirmOrderForm__price">
              {`$${sum + deliveryCost}`}
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="button-first-screen fw"
      >
        Оформити замовлення
      </button>

      <div className="confirmOrderForm__payment">
        <div className="confirmOrderForm__payment-ways">
          Способи оплати
        </div>

        <div className="confirmOrderForm__payment-variants">
          <img src={visa} alt="visa" />
          <img src={gPay} alt="googlePay" />
          <img src={masterCard} alt="masterCard" />
          <img src={payU} alt="payU" />
        </div>
      </div>
    </div>
  );
};
