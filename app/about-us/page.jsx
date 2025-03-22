import AboutCustomers from '@/components/AboutCustomers'
import AboutHero from '@/components/AboutHero'
import Article from '@/components/Article'
import Mission from '@/components/Mission'
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
