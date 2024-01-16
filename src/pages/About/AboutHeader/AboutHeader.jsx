import aboutPhoto from '../../../content/images/Rectangle17.png';
import { Button } from '../../../ui/Button';

export const AboutHeader = () => {
  return (
    <div className="about__header">
      <img
        src={aboutPhoto}
        alt="aboutPhoto"
        className="about__photo"
      />

      <div className="about__description">
        <h1 className="about__title section-title">
          Про Pushkin
        </h1>

        <p className="about__body-text bodytext">
          Pushkin Shop — найнадійніший магазин
          баскетбольних кросівок саме для тебе.
          Наші кроси відмінно підходять для гри на будь-якому покритті,
          забезпечують відмінну амортизацію
          та підтримку для стопи, що дозволяє тобі зробити
          найкращий крок на кожному етапі гри.
          <br />
          <br />
          Ми маємо різноманітні моделі  для будь-якого стилю гри
          та рівня підготовки, від високих до низьких,
          від легких до більш важких,
          а також різних дизайнів та кольорів, щоб кожен знайшов свій
          власний стиль.
          <br />
          <br />
          Пропонуємо лише високоякісні баскетбольні кросівки,
          які будуть служити вам протягом довгого часу.
        </p>

        <Button
          text="До каталогу"
          link="#/catalog"
          buttonClass="button-first-screen"
        />
      </div>
    </div>
  );
};
