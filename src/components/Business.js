import React from "react";

// this is a component that represents every business
const Business = ({business}) => {
  return (
    <div className="group relative">
      <div className="w-full">
        <img
          src={business.imageSrc}
          alt={business.name}
          className="h-full w-full object-cover object-center lg:w-full aspect-h-1 aspect-w-1 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80"
        />
      </div>
      <div className="mt-4 flex flex-col justify-between">
        <h3 className="text-sm text-gray-700">
          <a>
            <span aria-hidden="true" className="absolute inset-0" />
            <p className="font-bold text-2xl">{business.name}</p>
          </a>
        </h3>
        <div className="flex justify-between">
          <ul>
            <p className="text-sm text-gray-900">{business.address}</p>
            <p className="text-sm text-gray-900">{business.city}</p>
            <p className="text-sm text-gray-900">{business.state}</p>
            <p className="text-sm text-gray-900">{business.zipCode}</p>
          </ul>
          <ul>
            <p className="text-sm text-gray-900 uppercase">{business.category}</p>
            <p className="text-sm font-medium text-gray-900">{business.rating} stars</p>
            <p className="text-sm font-medium text-gray-900">
              {business.reviewCount} reviews
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Business;
