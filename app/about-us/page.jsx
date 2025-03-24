import AboutCustomers from '@/components/About/AboutCustomers'
import AboutHero from '@/components/About/AboutHero'
import Article from '@/components/About/Article'
import Mission from '@/components/About/Mission'
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
