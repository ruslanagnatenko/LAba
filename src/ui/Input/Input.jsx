import classNames from 'classnames';

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  errorMessage,
}) => {
  return (
    <div className="faq__input-field">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames(
          'input', 'faq__input',
          { 'is-danger': error },
        )}
      />

      {error && (
        <div>
          <p className="help has-text-danger">
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
};
