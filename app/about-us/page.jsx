import React from 'react';
import AboutHero from '@/components/About/AboutHero';
import AboutCustomers from '@/components/About/AboutCustomers';
import Mission from '@/components/About/Mission';
import Article from '@/components/About/Article';

const page = () => {
  return (
    <>
      <AboutHero />
      <AboutCustomers />
      <Mission />
      <Article />
    </>
  )
}

export default page
