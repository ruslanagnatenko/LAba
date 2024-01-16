import firstScreenPhoto
  from '../../../../content/images/first-screen-photo.png';
import { BottomBar } from '../BottomBar';

export const HeaderContent = () => (
  <div className="header__main">
    <img
      src={firstScreenPhoto}
      alt="Basketball trainers"
      className="header__photo"
    />

    <BottomBar />
  </div>
);
