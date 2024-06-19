import React from "react";
import data from "../data.json";
import Business from "./Business";

const BusinessList = () => {
  const { businesses } = data;
  console.log(businesses);
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {businesses.map((business) => (
          <Business
            key={business.id}
            name={business.name}
            imageSrc={business.imageSrc}
            address={business.address}
            city={business.city}
            state={business.state}
            zipCode={business.zipCode}
            category={business.category}
            rating={business.rating}
            reviewCount={business.reviewCount}
          />
        ))}
      </div>
    </div>
  );
};

export default BusinessList;
