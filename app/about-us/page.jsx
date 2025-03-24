import AboutCustomers from '@/components/about/AboutCustomers'
import AboutHero from '@/components/about/AboutHero'
import Article from '@/components/about/Article'
import Mission from '@/components/about/Mission'
import React from 'react'

const page = () => {
  return (
    <>
      <AboutHero/>
      <AboutCustomers/>
      <Mission/>
      <Article/>
    </>
  )
}

export default page
