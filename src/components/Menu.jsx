import { RiMusic2Fill } from "react-icons/ri";
import { RiSearchEyeLine } from "react-icons/ri";
import { RiListUnordered } from "react-icons/ri";
import { RiUserSettingsFill } from "react-icons/ri";

const Menu = () => {
  return (
    <nav className='fixed bg-sky-950 text-sky-50 p-2 w-full bottom-0 flex justify-between items-center'>
      <a className="flex flex-col items-center">
        <RiMusic2Fill />
        My list
      </a>
      <a className="flex flex-col items-center">
        <RiSearchEyeLine />
        Search
      </a>
      <a className="flex flex-col items-center">
        <RiListUnordered />
        News
      </a>
      <a className="flex flex-col items-center">
        <RiUserSettingsFill />
        Profile
      </a>
    </nav>
  )
}

export default Menu