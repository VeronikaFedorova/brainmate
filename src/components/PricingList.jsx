import { pricing } from "../constants";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          id={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8"
          key={item.id}
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p>{item.description}</p>

          <div>
            {item.price && (
              <>
                <div>$</div>
                <div>{item.price}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
