import React from 'react'
import dynamic from 'next/dynamic'
const CategoryList =dynamic(()=>import('@/components/Categories/CategoryList'))
const FilterSidebar =dynamic(()=>import('@/components/Categories/FilterSidebar'))

const CategoriesItems = () => {
  return (
    <section className='lg:py-20 py-12 bg-white'>
        <div className="container mx-auto lg:px-0 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_4fr] gap-12 items-center">
                <div className="">
                    <CategoryList/>
                    <FilterSidebar/>
                </div>
                <div className="">Tuiii</div>
            </div>
        </div>
    </section>
  )
}

export default CategoriesItems