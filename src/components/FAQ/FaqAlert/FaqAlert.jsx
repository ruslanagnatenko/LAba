import succesIcon from '../../../content/icons/success-icon.svg';
import close from '../../../content/icons/x.svg';
import { useFaq } from '../FaqContext';

export const FaqAlert = () => {
  const {
    setIsSent,
    setName,
    setPhone,
    setMail,
    setMessage,
    name,
  } = useFaq();

  const handleClose = () => {
    setIsSent(false);
    setName('');
    setPhone('');
    setMail('');
    setMessage('');
  };

  return (
    <div className="faq__alert">
      <button
        type="button"
        className="faq__close-icon"
        onClick={handleClose}
      >
        <img
          src={close}
          alt="closeIcon"
          className="faq__close-img"
        />
      </button>
      <div className="faq__alert-title">
        <img
          src={succesIcon}
          alt="succesIcon"
          className="faq__icon"
        />
        {`${name}, Ваше повідомлення успішно відправлено!
        Ми звяжемось з вами впродовж декількох годин`}
      </div>
    </div>
  );
};
