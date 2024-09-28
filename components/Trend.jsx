
const Trend = ({ name, price, id, symbol, image, priceUpdate, ath }) => {

  return (
    <section className="text-white hover:bg-gunmetal shadow-shadow hover:rounded-xl">

        <div className="flex py-3 px-4 flex-col">
              <div className="flex flex-row gap-2">
                <img src={image} className="lg:w-[25px] lg:h-[25px] w-[20px] h-[20px]" alt={name} />
                <h1 className="font-fontUbuntu lg:text-base text-sm">{name}</h1>
                <p className="capitalize font-fontUbuntu text-cadetcrayola lg:text-base text-sm font-bold">{symbol}/usd</p>
              </div>

              <div className="lg:text-3xl text-lg font-medium font-fontUbuntu py-3 gap-2"><p>USD <span>{price}</span></p></div>

              <div className="flex flex-row gap-3 items-center">
                <p className="font-fontUbuntu lg:text-base text-sm">{ath}</p>
                {priceUpdate < 0 ? (
                  <p className="bg-red-600 rounded-xl px-2 lg:text-base text-sm font-fontUbuntu">{priceUpdate.toFixed(2)}%</p>
                ) : (<p className="bg-green-600 rounded-xl px-2 lg:text-base text-sm font-fontUbuntu">{priceUpdate.toFixed(2)}%</p>)
                }
              </div>
        </div>
    </section>
  );
};

export default Trend;