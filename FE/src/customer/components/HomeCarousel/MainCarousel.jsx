import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { mainCarouselData } from './data';



const MainCarousel = () => {
    const items = mainCarouselData.map((item) =>
        <img className='cursor-pointer h-[500px] w-[100vw]'
            role='presentation' src={item.image} alt='' />);

    return (
        // <div className='cursor-pointer flex flex-col items-center bg-white 
        //     rounded-lg shadow-lg overflow-hidden h-[70vh] w-[auto]'>
        //     <AliceCarousel
        //         mouseTracking
        //         items={items}
        //         disableButtonsControls
        //         autoPlay
        //         autoPlayInterval={5000}
        //         infinite
        //     />
        //     {/* <div className='h-[auto] w-[auto]'>
        //         <img className='object-cover object-top w-full h-full'
        //             src='https://galxboy.co.za/cdn/shop/collections/Galxboy_Collection_Banner_1.png?v=1687439470&width=1600'></img>
        //     </div>

        //     <div className='p-4'>
        //         <h3></h3>
        //     </div> */}
        // </div>
        <div className='h-[500px] bg-black'>
           <AliceCarousel className='h-[600px]'
            mouseTracking
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={5000}
            infinite
        /> 
        </div>
    )


};

export default MainCarousel;