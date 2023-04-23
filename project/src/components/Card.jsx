import React from "react";
import PropTypes from 'prop-types';
const Card = ({ btnTitle, title, price, list, className,classTitle, btnClass, listClass }) => {
  return (
    <div className={`w-64 flex-1 mt-8 p-8 order-2 shadow-md border border-separate rounded-3xl lg:order-1 ${className ? className : `bg-white`}`}>
      <div className="mb-7 pb-7 flex items-center justify-center">
        <div className="text-center">
          <h5 className={`block text-xl font-semibold mb-5 md:mb-10 ${classTitle}`}>{title}</h5>
          <span className={`flex items-center  ${classTitle? classTitle : `text-gray-700`}`}>
            <span className={`font-medium  text-5xl align-top`}>
              $&thinsp;
            </span>
            <span className="text-xl md:text-6xl md:font-bold">{price}</span>
          </span>
        </div>
      </div>
      <ul className={`mb-7 font-medium  ${listClass ? listClass : `text-gray-500`}`}>
        {list &&
          // eslint-disable-next-line react/prop-types
          list.length > 0 &&
          // eslint-disable-next-line react/prop-types
          list.map((item, key) => (
            <li
              key={key}
              className="flex text-lg border-t border-gray-200 py-3 justify-center"
            >
              <span className=" text-base font-semibold">{item}</span>
            </li>
          ))}
      </ul>
      <button className={`flex justify-center items-center rounded-sm py-2 w-full px-4 text-center  text-xl ${btnClass ?  btnClass : `bg-fuchsia-400 text-white`}`}>
        {btnTitle}
      </button>
    </div>
  );
};
Card.propTypes = {
    btnTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    classTitle: PropTypes.string.isRequired,
    listClass: PropTypes.any.isRequired,
    btnClass: PropTypes.any.isRequired,
  };
export default Card;
