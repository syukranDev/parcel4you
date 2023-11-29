import React from 'react'

const Navbar = () => {
  return (
    <nav className=" dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
            {/* <img src="https://gcdnb.pbrd.co/images/WhM3BGc8GH7H.png?o=1" className="h-8 mr-1.5 mt-2" alt="Flowbite Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#E4E5E6]">parcel4you</span>
        </a>
        <div className="flex md:order-2">
            <a href='/login'>
                <button type="button" className=" flex flex-row text-white bg-blue-700 mt-0.5 md:mt-0 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Get started
                    <svg aria-hidden="true" className="w-4 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

                </button>
            </a>
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
                <a href="/about" className="block py-2 pl-3 pr-4 text-white rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
                <a href="/rates" className="block py-2 pl-3 pr-4 text-white rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            {/* <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white rounded  
                     md:hover:bg-transparent md:hover:text-blue-700 md:p-0 
                     md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 
                     dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Contact
                </a>
            </li> */}
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar