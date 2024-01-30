import { useEffect, useState } from "react";
import { usePlayerStore } from "../hooks/playerStore";
import { RiAddFill } from "react-icons/ri";
import { addSong, getPlayList } from '../api/getInfoPlayList.api';
import { RiListCheck3 } from "react-icons/ri";

const AddToList = () => {
  const { currentMusic, playListModified } = usePlayerStore(state => state)
  const [isListed, setIsListed] = useState(false)
  const [playList, setPlayList] = useState([])

  useEffect(() => {
    const loadPlayList = async () => {
      try {
        const res = await getPlayList();
       
        if (res.data) {
          setPlayList({ playList: res.data })
        }
        
      } catch (error) {
        console.error('Error loading playlist:', error);
      }
    };
    loadPlayList();
  }, [currentMusic, playListModified]);
  console.log(currentMusic)

  useEffect(() => {
    const isListed = playList.playList?.map((item) => (item.id_music_deezer)).includes(currentMusic.song?.id);

    setIsListed(isListed)
  }, [playList]);


  const addToList = async () => {
    const song = {
      "id_user": 1,
      "id_music_deezer": currentMusic.song.id
    }

    try {
      const res = await addSong(song);
      if (res.status == 201) {
        setIsListed(true);
        alert('muisca added')
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button>
      {isListed ? (
        <RiListCheck3
          className='text-3xl cursor-pointer'
        />
      ) : (
        <RiAddFill
          className='text-3xl cursor-pointer'
          onClick={addToList}
        />
      )}
    </button>
  )
}

export default AddToList