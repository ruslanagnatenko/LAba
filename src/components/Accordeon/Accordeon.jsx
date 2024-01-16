import { useState } from 'react';

export const Accordeon = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className="accordeon">
      <button
        type="button"
        className="accordeon__header"
        onClick={() => setIsOpen1(!isOpen1)}
      >
        <h3 className="accordeon__title">Опис</h3>
        <span className="accordeon__status">{isOpen1 ? '-' : '+'}</span>
        {isOpen1 && (
          <div className="accordeon__content secondaryText">
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Distinctio, deserunt.
            Voluptates id in, officiis tenetur rem doloremque
            tempore est quidem sequi praesentium eos qui architecto.
            Placeat sequi dolore nisi cupiditate!
          </div>
        )}
      </button>

      <button
        type="button"
        className="accordeon__header"
        onClick={() => setIsOpen2(!isOpen2)}
      >
        <h3 className="accordeon__title">Характеристики</h3>
        <span className="accordeon__status">{isOpen2 ? '-' : '+'}</span>
        {isOpen2 && (
          <div className="accordeon__content secondaryText">
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Distinctio, deserunt.
            Voluptates id in, officiis tenetur rem doloremque
            tempore est quidem sequi praesentium eos qui architecto.
            Placeat sequi dolore nisi cupiditate!
          </div>
        )}
      </button>

      <button
        type="button"
        className="accordeon__header"
        onClick={() => setIsOpen3(!isOpen3)}
      >
        <h3 className="accordeon__title">Доставка і оплата</h3>
        <span className="accordeon__status">{isOpen3 ? '-' : '+'}</span>
        {isOpen3 && (
          <div className="accordeon__content secondaryText">
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Distinctio, deserunt.
            Voluptates id in, officiis tenetur rem doloremque
            tempore est quidem sequi praesentium eos qui architecto.
            Placeat sequi dolore nisi cupiditate!
          </div>
        )}
      </button>
    </div>
  );
};
