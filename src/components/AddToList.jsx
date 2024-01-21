import { RiAddCircleLine } from "react-icons/ri";
import { usePlayerStore } from "../hooks/playerStore";
import { addSong } from '../api/getInfoPlayList.api';


const AddToList = () => {
  const { currentMusic } = usePlayerStore(state => state)
  
  const addToList = async () => {

    const song = {
      "id_user": 1,
      "id_music": currentMusic.song.id,
      "singer_name": currentMusic.song.artist.name,
      "song_name": currentMusic.song.title
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