import React from 'react'

function HomeSectionCard( {product}) {
  return (
    <div className='cursor-pointer flex flex-col items-stretch bg-white 
            rounded-lg shadow-lg overflow-hidden  w-[15rem]  border border-black:'>
            <div className='px-5'>
                <img className='object-cover object-top w-full h-full'
                  src={product.imageUrl} alt=''
                  />
            </div>

            <div className='p-4'>
                <p className='mt-2 text-sm text-gray-500'>{product.brand}</p>
                <p className='text-md font-medium text-gray-900'>{product.title}</p>
                
            </div>
        </div>
  )
}

export default HomeSectionCard