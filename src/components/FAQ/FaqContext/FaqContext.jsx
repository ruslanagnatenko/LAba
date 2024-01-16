import React, {
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export const FaqContext = React.createContext({
  name: '',
  setName: () => { },
  isSent: false,
  isFormLoading: false,
  setIsFormLoading: () => { },
  setIsSent: () => { },
  phone: '',
  setPhone: () => { },
  mail: '',
  setMail: () => { },
  message: '',
  setMessage: () => { },
  nameError: false,
  setNameError: () => { },
  phoneError: false,
  setPhoneError: () => { },
  mailError: false,
  setMailError: () => { },
  handleSubmit: () => { },
  handleInputBlur: () => { },
});

export const FaqContextProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!name) {
        setNameError(true);
      }

      if (!phone) {
        setPhoneError(true);
      }

      if (!mail) {
        setMailError(true);
      }

      if (!name || !phone || !mail) {
        return;
      }

      setIsFormLoading(true);

      setTimeout(() => {
        setIsFormLoading(false);
        setIsSent(true);
      }, 500);

      setTimeout(() => {
        setIsSent(false);
        setName('');
        setPhone('');
        setMail('');
        setMessage('');
      }, 5000);
    }, [mail, name, phone],
  );

  const handleInputBlur = useCallback(
    (category, setError) => {
      if (!category) {
        setError(true);
      }
    }, [],
  );

  const value = useMemo(() => ({
    name,
    setName,
    isSent,
    setIsSent,
    phone,
    setPhone,
    mail,
    setMail,
    isFormLoading,
    setIsFormLoading,
    nameError,
    setNameError,
    phoneError,
    setPhoneError,
    mailError,
    setMailError,
    message,
    setMessage,
    handleSubmit,
    handleInputBlur,
  }), [
    name,
    isSent,
    phone,
    mail,
    isFormLoading,
    nameError,
    phoneError,
    mailError,
    message,
    handleSubmit,
    handleInputBlur,
  ]);

  return (
    <FaqContext.Provider value={value}>
      {children}
    </FaqContext.Provider>
  );
};

export const useFaq = () => useContext(FaqContext);
