// src/components/ServiceHighlights.jsx
import React from 'react';

const services = [
  {
    icon: "icons/icon-delivery.svg",
    title: "Free and Fast Delivery",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: "icons/Icon-Customer service.svg",
    title: "24/7 Customer Service",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: "icons/shield-tick.svg",
    title: "Money Back Guarantee",
    description: "We return money within 30 days",
  },
];

const ServiceHighlights = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center p-8 my-16 bg-white">
      {services.map((service, idx) => (
        <div key={idx} className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#cccaca] text-black text-2xl">
            <img
            src={service.icon}
            alt={service.title}
            className="w-14 h-14 p-2 mx-auto object-contain bg-black rounded-full"
          />
          </div>
          <h3 className="font-semibold uppercase text-xl text-black">{service.title}</h3>
          <p className="text-black text-sm font-normal">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceHighlights;
