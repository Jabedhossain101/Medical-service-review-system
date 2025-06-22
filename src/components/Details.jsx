import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
  const {
    serviceImage,
    serviceTitle,
    companyName,
    website,
    _id,
    category,
    description,
    price,
    userEmail,
  } = useLoaderData();

  return (
    <div>
      <div className="h-30"></div>
      <h1>{serviceTitle}</h1>
    </div>
  );
};

export default Details;
