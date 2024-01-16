import classNames from 'classnames';
import { Loader } from '../../Loader';
import { useFaq } from '../FaqContext';
import { Input } from '../../../ui/Input';

export const FaqForm = () => {
  const {
    name,
    setName,
    phone,
    setPhone,
    mail,
    setMail,
    isFormLoading,
    setNameError,
    nameError,
    phoneError,
    setPhoneError,
    mailError,
    setMailError,
    message,
    setMessage,
    handleSubmit,
    handleInputBlur,
  } = useFaq();

  return (
    <form
      className="faq__form"
      onSubmit={handleSubmit}
    >

      <Input
        type="text"
        placeholder="Ваше ім'я"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setNameError(false);
        }}
        onBlur={() => {
          handleInputBlur(name, setNameError);
        }}
        error={nameError}
        errorMessage="Впишіть, будь ласка, своє ім'я"
      />

      <Input
        type="tel"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
          setPhoneError(false);
        }}
        onBlur={() => {
          handleInputBlur(
            phone,
            setPhoneError,
          );
        }}
        error={phoneError}
        errorMessage="Впишіть, будь ласка, свій телефон"
      />

      <Input
        type="email"
        placeholder="Email"
        value={mail}
        onChange={(e) => {
          setMail(e.target.value);
          setMailError(false);
        }}
        onBlur={() => {
          handleInputBlur(
            mail,
            setMailError,
          );
        }}
        error={mailError}
        errorMessage="Впишіть, будь ласка, свій email"
      />

      <textarea
        placeholder="Ваше повідомлення"
        className="textarea faq__input"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        type="submit"
        className={classNames(
          'button button-first-screen',
          { 'button-light': isFormLoading },
        )}
      >
        {isFormLoading ? (
          <Loader />
        ) : (
          'Відправити'
        )}
      </button>
    </form>
  );
};
