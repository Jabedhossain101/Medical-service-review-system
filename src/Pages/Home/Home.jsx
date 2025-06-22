import React, { Suspense } from 'react';
import Banner from './Banner';
import Hero from './Hero';
import AllService from '../../components/AllService';

const Home = () => {
  const servicePromise = fetch('http://localhost:3000/service').then(res =>
    res.json()
  );
  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <Suspense fallback={'loading service'}>
        <AllService servicePromise={servicePromise}></AllService>
      </Suspense>
    </div>
  );
};

export default Home;
