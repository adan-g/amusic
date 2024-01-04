import { RiMusic2Fill } from "react-icons/ri";
import { RiSearchEyeLine } from "react-icons/ri";
import { RiListUnordered } from "react-icons/ri";
import { RiUserSettingsFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className='fixed bg-sky-950 text-sky-50 p-2 w-full bottom-0 flex justify-between items-center'>
      <Link to='/' className="flex flex-col items-center">
        <RiMusic2Fill />
        My list
      </Link>
      <Link to='/search' className="flex flex-col items-center">
        <RiSearchEyeLine />
        Search
      </Link>
      <Link to='/news' className="flex flex-col items-center">
        <RiListUnordered />
        News
      </Link>
      <Link to='/profile' className="flex flex-col items-center">
        <RiUserSettingsFill />
        Profile
      </Link>
    </nav>
  )
}

export default Menu