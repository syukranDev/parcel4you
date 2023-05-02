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
    <div class="relative flex overflow-x-hidden">
        <div class=" animate-marquee whitespace-nowrap flex">
            <img src='https://gcdnb.pbrd.co/images/x9F8brqasE84.png?o=1' width='350' height='100' className='ml-12 '></img>
            <img src='https://gcdnb.pbrd.co/images/z7P498vd2SiN.png?o=1'  width='250' height='100' className='ml-12'></img>
            <img src='https://gcdnb.pbrd.co/images/Pwq3UuvhKOdT.png?o=1'width='250' height='100'  className='ml-12'></img>
        </div>
        <div class="absolute top-0  animate-marquee2 whitespace-nowrap flex">
            <img src='https://gcdnb.pbrd.co/images/x9F8brqasE84.png?o=1' width='350' height='100' className='ml-12'></img>
            <img src='https://gcdnb.pbrd.co/images/z7P498vd2SiN.png?o=1' width='250' height='100' className='ml-12'></img>
            <img src='https://gcdnb.pbrd.co/images/Pwq3UuvhKOdT.png?o=1' width='250' height='100' className='ml-12 antialiased'></img>
        </div>

    </div>
  )
}


