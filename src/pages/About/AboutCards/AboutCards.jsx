import deliver from '../../../content/images/deliver.png';
import trainers from '../../../content/images/trainers.png';
import flag from '../../../content/images/flag.png';
import player from '../../../content/images/player.png';

export const AboutCards = () => {
  return (
    <div className="about__cards">
      <div className="about__card">
        <img
          className="about__card-photo"
          src={deliver}
          alt="deliver"
        />
        <p className="bodytext">
          Швидка доставка
        </p>
      </div>
      <div className="about__card">
        <img
          className="about__card-photo"
          src={trainers}
          alt="trainers"
        />
        <p className="bodytext">
          100% оригінал
        </p>
      </div>
      <div className="about__card">
        <img
          className="about__card-photo"
          src={flag}
          alt="trainers"
        />

        <p className="bodytext">
          Під замовлення
          <br />
          із США
        </p>
      </div>
      <div className="about__card">
        <img
          className="about__card-photo"
          src={player}
          alt="trainers"
        />
        <p className="bodytext">
          Понад 1000 задоволених клієнтів
        </p>
      </div>
    </div>
  );
};
