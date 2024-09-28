import { useState } from "react";
import { FaStar } from 'react-icons/fa';

const Markettable = ({ name, number, image, symbol, marketcap, price, priceChangePercentage }) => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <tr className="text-white border-b-raisinblack border-b-2 font-medium text-lg font-fontUbuntu">
      <td className="px-3 py-6">
        <button
          className={`flex items-center justify-center w-8 h-8 rounded-full transition duration-300 ease-in-out ${isActive ? 'text-yellow-400' : ' text-white'}`}
          onClick={handleClick}
        >
        {isActive ? (
          <FaStar size={24} className="text-lg" />
          ) : (
          <FaStar size={24} className="text-lg" />
          )}
        </button>
      </td>
      <td className="px-3 py-6 text-left">{number}</td>
      <td className="px-3 py-7 flex flex-row gap-2 items-center">
        <img src={image} className="w-[20px] h-[20px]" />
        <div className="flex gap-2">
          <p>{name}</p>
          <p className="text-raisinblack">{symbol}</p>
        </div>
      </td>
      <td className="px-3 py-6">${price}</td>
      <td className="px-3 py-6">{priceChangePercentage < 0 ? (
        <td className="text-red-600 font-fontUbuntu">{priceChangePercentage.toFixed(2)}%</td>
      ) : (<td className="text-green-600 font-fontUbuntu">{priceChangePercentage.toFixed(2)}%</td>)
      }</td>
      <td className="px-3 py-6">${marketcap}</td>
      <td className="px-3 py-6">Last 7 Days</td>
      <td className="px-3 py-6">
        <button className="hover:bg-bluecrayola hover:border-bluecrayola border-white border text-white font-bold py-1 px-4 rounded-full">
          Trade
        </button>
      </td>
    </tr>
  );
};

export default Markettable;