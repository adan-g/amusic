import { useEffect, useState } from "react";
import { usePlayerStore } from "../hooks/playerStore";
import { addSong, getPlayList } from '../api/getInfoPlayList.api';
import { RiAddFill } from "react-icons/ri";
import { RiPlayList2Fill } from "react-icons/ri";

const AddToList = () => {
  const { currentMusic, playListModified, playList, setPlayList, setAlertMsg } = usePlayerStore(state => state)
  const [isListed, setIsListed] = useState(false)

  useEffect(() => {
    const loadPlayList = async () => {
      try {
        const res = await getPlayList();

        if (res.data) {
          setPlayList(res.data)
        }

      } catch (error) {
        console.error('Error loading playlist:', error);
      }
    };
    loadPlayList();
  }, [currentMusic, playListModified, isListed]);


  useEffect(() => {
    const isListed = playList?.map((item) => (item.id_music_deezer)).includes(currentMusic.song?.id);
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
        setAlertMsg({type: `success`, message: `Music added to your playlist!`})
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button>
      {isListed ? (
        <RiPlayList2Fill
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