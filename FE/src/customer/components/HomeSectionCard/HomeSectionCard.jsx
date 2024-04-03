import React from 'react'

function HomeSectionCard({ product }) {
//   return (
//     <div key={product.id} className="group relative">
//       <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md 
//         bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//         <img
//           src={product.imageUrl}
//           alt={product.imageAlt}
//           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//         />
//       </div>
//       <div className="mt-4 flex justify-between">
//         <div>
//           <h3 className="text-sm text-gray-700">
//             <a href={product.href}>
//               <span aria-hidden="true" className="absolute inset-0" />
//               {product.title}
//             </a>
//           </h3>
//           <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//         </div>
//         <p className="text-sm font-medium text-gray-900">{product.price}</p>
//       </div>
//     </div>
// )
  return (
    <div className='cursor-pointer flex flex-col items-stretch bg-white 
            rounded-lg shadow-lg overflow-hidden  w-[15rem]  border border-black:'>
      <div className=''>
        <img className='object-cover object-top w-full h-full'
          src={product.imageUrl} alt={product.title}
        />
      </div>

      <div className="mt-4 flex justify-between">
         <div>
           <h3 className="text-sm text-gray-700">
             <a href={product.href}>
               <span aria-hidden="true" className="absolute inset-0" />
               {product.title}
             </a>
           </h3>
           <p className="mt-1 text-sm text-gray-500">{product.color}</p>
         </div>
         <p className="text-sm font-medium text-gray-900">{product.price}</p>
       </div>

      {/* <div className='p-4 h-32'>
        <p className='mt-2 text-sm text-gray-500'>{product.brand}</p>
        <p className='text-md font-medium text-gray-900'>{product.title}</p>
      </div> */}
    </div>
  )
}

export default HomeSectionCard