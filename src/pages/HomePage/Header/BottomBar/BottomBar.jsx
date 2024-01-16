// eslint-disable-next-line import/no-useless-path-segments
import { useAppContext } from '../../../../AppContext';
import { Button } from '../../../../ui/Button';
// import './../../../ui/Button/Button.scss';

export const BottomBar = () => {
  const { goToPage } = useAppContext();

  return (
    <div className="header__bottom-bar bottom-bar">
      <div className="bottom-bar__content">
        <h1 className="h1">
          Все для твоєї впевненості на корті
        </h1>
        <p className="bottom-bar__description">
          Pushkin Shop працює з надійними
          постачальниками із США і доставляє
          баскетбольні кросівки по всій Україні. Тільки
          100% оригінал і фірмова якість.
        </p>
      </div>

      <Button
        text="До каталогу"
        link="/catalog"
        buttonClass="button-first-screen"
        onClick={goToPage}
      />
    </div>
  );
};
