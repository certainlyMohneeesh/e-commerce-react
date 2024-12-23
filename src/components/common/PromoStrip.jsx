import React from 'react';

const PromoStrip = () => {
  const promoItems = [
    '50% Off on Electronics!',
    'Buy 1 Get 1 Free on Shoes!',
    'Mega Sale on Groceries!',
    'Flat 40% Off on Home Appliances!',
    'Exclusive Deals on Fashion!',
  ];

  // Duplicate items to create the illusion of infinite scrolling
  const repeatedPromoItems = [...promoItems, ...promoItems];

  return (
    <div className="overflow-hidden bg-gray-100 py-2">
      <div className="relative flex animate-scroll items-center space-x-8 whitespace-nowrap">
        {repeatedPromoItems.map((item, index) => (
          <div
            key={index}
            className="text-sm font-semibold text-gray-800 px-4 py-2 bg-white shadow rounded-full"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoStrip;
