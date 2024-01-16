import { RiMusic2Fill } from "react-icons/ri";
import { RiSearchEyeLine } from "react-icons/ri";
import { RiListUnordered } from "react-icons/ri";
import { RiUserSettingsFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";


const Menu = () => {
  const [clicked, setClicked] = useState('My list')


  const handleClick = (value) => {
    setClicked(value.target.innerText)
  }

  return (
    <nav className='fixed bg-[#193352] text-sky-50 p-2 w-full bottom-0 flex justify-between items-center'>
      <Link
        to='/'
        className={`flex flex-col items-center ${clicked === 'My list' ? '#f0f9fe' : 'text-gray-500'}`}
        onClick={handleClick}>
        <RiMusic2Fill />
        My list
      </Link>

      <Link
        to='/search'
        className={`flex flex-col items-center ${clicked === 'Search' ? '#f0f9fe' : 'text-gray-500'}`}
        onClick={handleClick}
      >
        <RiSearchEyeLine />
        Search
      </Link>

      <Link
        to='/news'
        className={`flex flex-col items-center ${clicked === 'News' ? '#f0f9fe' : 'text-gray-500'}`}
        onClick={handleClick}
      >
        <RiListUnordered />
        News
      </Link>

      <Link
        to='/profile'
        className={`flex flex-col items-center ${clicked === 'Profile' ? '#f0f9fe' : 'text-gray-500'}`}
        onClick={handleClick}
      >
        <RiUserSettingsFill />
        Profile
      </Link>
    </nav>
  )
}

export default Menu