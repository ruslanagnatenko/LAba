import { Link } from 'react-router-dom';

export const Button = ({
  text,
  link,
  buttonClass,
  onClick,
}) => (
  <Link
    to={`${link}`}
    className={buttonClass}
    onClick={onClick}
  >
    {text}
  </Link>
);
