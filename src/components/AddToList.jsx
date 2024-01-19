import { getPlayList } from '../api/getInfoPlayList.api'
import { RiAddCircleLine } from "react-icons/ri";
import { usePlayerStore } from "../hooks/playerStore";
import { addSong } from '../api/getInfoPlayList.api';


const AddToList = () => {
  const { currentMusic } = usePlayerStore(state => state)

  const addToList = async () => {
    const song = {
      "title": 'demon',
      "singer": 'Imagine Dragons'
    }

    try {
      const res = await addSong(song);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <RiAddCircleLine
        onClick={addToList}
        className='text-3xl cursor-pointer'
      />
    </div>
  )
}

export default AddToList