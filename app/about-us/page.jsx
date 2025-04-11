import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutCustomers from '@/components/about/AboutCustomers';
import Mission from '@/components/about/Mission';
import Article from '@/components/about/Article';

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
