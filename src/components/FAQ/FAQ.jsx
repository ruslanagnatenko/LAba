/* eslint-disable import/no-useless-path-segments */
import faqPhoto from './../../content/images/faq-photo.png';
import { FaqAlert } from './FaqAlert';
import { useFaq } from './FaqContext';
import { FaqForm } from './FaqForm';

export const FAQ = () => {
  const { isSent } = useFaq();

  return (
    <div className="faq">
      <img
        src={faqPhoto}
        alt="aksnxl"
        className="faq__photo"
      />

      <div className="faq__form-container">
        <div className="faq__form-top">
          <h1 className="h1">Шо ся стало?</h1>
          <p
            className="bodytext"
          >
            Опишіть свою проблему чи запитання
            у повідомленні — і ми відповімо!
          </p>
        </div>

        <FaqForm />
      </div>

      {isSent && <FaqAlert />}
    </div>
  );
};
