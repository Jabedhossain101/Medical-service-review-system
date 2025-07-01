import React, { Suspense } from 'react';
import Banner from './Banner';
import Hero from './Hero';
import AllService from '../../components/AllService';
import CountUp from 'react-countup';
import FAQSection from './FAQSection';
import Author from './Author';

const Home = () => {
  const servicePromise = fetch(
    'https://rafsan-service.vercel.app/service'
  ).then(res => res.json());

  return (
    <div className="font-opensans">
      <Hero></Hero>
      <Author></Author>
      <Banner></Banner>
      <Suspense fallback={'loading service'}>
        <AllService servicePromise={servicePromise}></AllService>
      </Suspense>

      <FAQSection></FAQSection>
      <section className="bg-lime-100 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold text-lime-600">
              <CountUp end={400} duration={3} />+
            </h2>
            <p className="text-lg font-medium text-gray-700 mt-2">
              Registered Users
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-lime-600">
              <CountUp end={600} duration={3} />+
            </h2>
            <p className="text-lg font-medium text-gray-700 mt-2">
              Total Reviews
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-lime-600">
              <CountUp end={80} duration={3} />+
            </h2>
            <p className="text-lg font-medium text-gray-700 mt-2">
              Active Services
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
