import React from 'react'
import { ImExit } from 'react-icons/im'

const NavbarUser = (props) => {
    console.log(props)
  return (
    <nav className=" dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
            <img src="https://gcdnb.pbrd.co/images/WhM3BGc8GH7H.png?o=1" className="h-5 mr-1.5 mt-0.5" alt="Flowbite Logo" />
            <span className="self-center text-lg font-semibold whitespace-nowrap text-[#E4E5E6]">parcel4you</span>
        </a>
        <div className="flex flex-row md:order-2 mt-1.5 md:mt-0">
                <p className='text-white text-sm font-thin '>Welcome, {props.loggedUserDetails[0] || props.loggedUserDetails[1]}</p>
                <button onClick={props.handleSignout}>
                    <ImExit size={20} className='fill-white hover:fill-rose-600 ml-3 mt-0.5'/>
                </button>
            {/* <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button> */}
        </div>
        </div>
    </nav>
  )
}

export default NavbarUser