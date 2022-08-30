import React from 'react';
import './Navs.css'
import { FaBeer, FaBell, FaFacebook, FaFacebookMessenger, FaGamepad, FaHome, FaHouseDamage, FaPlus, FaSearch, FaTv, FaUser, FaUsers, FaWarehouse } from 'react-icons/fa'
import { GrGroup } from "react-icons/gr";
const Navs = () => {
    return (
        <>
            <nav class="row flex items-center justify-between flex-wrap  p-6  shadow-sm	box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)">
  <div class="flex mr-6 col-md-3">
  <FaFacebook  class='w-7 mt-2 fb' />
  <div className="widgets_input flex mx-3 ">
                <FaSearch className="widgets_searchIcon" />
                <input placeholder=" Search Twitter" type="text" />
            </div>
  </div>
  <div class="block lg:hidden">
    {/* <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button> */}
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto space-x-4 ">
    <div class="text-sm lg:flex-grow  midle col-md-6">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-16 ">
        <FaHome className='icons'/>
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-16">
      <FaTv className='icons'/>
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-16">
      <FaWarehouse className='icons'/>
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-16">
      <FaUsers className='icons'/>
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-dark mr-16">
        <FaGamepad className='icons'/>
      </a>
    </div>
    <div class ="col-md-3 space-x-6 ">
    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ">
        <FaPlus className='icons'/>
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ">
       <FaFacebookMessenger className='icons'/>
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ">
        <FaBell  className='icons'/>
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-dark ">
      <div class="relative">
      <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="/docs/images/people/profile-picture-5.jpg" alt=""/>
</div>
      </a>
    </div>
  </div>
</nav>
        </>
    );
};

export default Navs;