import Image from 'next/image'
import React from 'react'
require('../public/jnt.png')

// const providerImgArray = [
//     { name: 'citylink', url: '/../public/citylink.png'},
//     { name: 'dhl', url: '/../public/dhl.png'},
//     { name: 'jnt', url: '/../public/jnt.png'},
//     { name: 'poslaju', url: '/../public/poslaju.png'},
//     { name: 'skynet', url: '/../public/skynet.png'},
// ]


export const ServiceProvider = () => {
  return (
   

    <div className=''>
      <div class="w-full p-4 text-center flex flex-col md:flex-row  justify-center border-gray-200 rounded-lg  sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <img src='https://gcdnb.pbrd.co/images/z7P498vd2SiN.png?o=1'  width='250' height='100' className='mx-auto md:mx-4 grayscale hover:grayscale-0'></img>
              <img src='https://gcdnb.pbrd.co/images/Pwq3UuvhKOdT.png?o=1' width='250' height='100'  className='mx-auto md:mx-4 grayscale hover:grayscale-0'></img>
              <img src='https://gcdnb.pbrd.co/images/x9F8brqasE84.png?o=1' width='250' height='100' className='mx-auto md:mx-4 grayscale hover:grayscale-0'></img>
              <img src='https://gcdnb.pbrd.co/images/z7P498vd2SiN.png?o=1'  width='250' height='100' className='mx-auto md:mx-4 grayscale  hover:grayscale-0'></img>
      </div>
    </div>
  )
}


