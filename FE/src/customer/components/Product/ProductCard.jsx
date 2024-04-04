import React from 'react'
import './Product.css'
const ProductCard = () => {
  return (
    <div className='productCard  w-[15rem] m-3 transition-all cursor-pointer'>
        <div >
            <img className='h-full w-full object-cover '
            src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/469361/item/vngoods_57_469361.jpg?width=320"
            alt='' />
        </div>

        <div className='textPart bg-white p-3'>
            <div >
                <p className='font-bold opacity-60'>Product Tilte</p>
                <p>afjlajgnglandg </p>
            </div>
            <div className='flex items-stretch space-x-2 mt-2'>
                <p className='font-semibold'>400.000</p>
                <p className='line-through opacity-50'>600.000</p>
                <p className='text-green-600 font-semibold'>40% off</p>
            </div>
        </div>

    </div>
  )
}

export default ProductCard