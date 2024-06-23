import React from "react";

// this is a component that represents every business
const Business = (props) => {
  const {
    name,
    imageSrc,
    address,
    city,
    state,
    zipCode,
    category,
    rating,
    reviewCount,
  } = props;
  return (
    <div className="group relative">
      <div className="w-full">
        <img
          src={imageSrc}
          alt={name}
          className="h-full w-full object-cover object-center lg:w-full aspect-h-1 aspect-w-1 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80"
        />
      </div>
      <div className="mt-4 flex flex-col justify-between">
        <h3 className="text-sm text-gray-700">
          <a>
            <span aria-hidden="true" className="absolute inset-0" />
            <p className="font-bold text-2xl">{name}</p>
          </a>
        </h3>
        <div className="flex justify-between">
          <ul>
            <p className="text-sm text-gray-900">{address}</p>
            <p className="text-sm text-gray-900">{city}</p>
            <p className="text-sm text-gray-900">{state}</p>
            <p className="text-sm text-gray-900">{zipCode}</p>
          </ul>
          <ul>
            <p className="text-sm text-gray-900 uppercase">{category}</p>
            <p className="text-sm font-medium text-gray-900">{rating} stars</p>
            <p className="text-sm font-medium text-gray-900">
              {reviewCount} reviews
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Business;
