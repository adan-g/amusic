import { usePlayerStore } from "../hooks/playerStore";
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";

const PlayButton = ({ id }) => {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore(state => state)

  const isPlayingMusic = isPlaying && currentMusic?.song.id === id;

  const handleClick = () => {
    if (isPlayingMusic) {
      setIsPlaying(false)
      return
    }

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
      }
    };

    fetch(`https://deezerdevs-deezer.p.rapidapi.com/track/${id}`, options)
      .then(res => res.json())
      .then(data => {

        setIsPlaying(true)
        setCurrentMusic({ song: data })
      })
  }

  return (
    <button onClick={handleClick}>
      {isPlayingMusic ? (
        <RiPauseCircleFill className='text-2xl' />
      ) : (
        <RiPlayCircleFill className='text-2xl' />
      )}
    </button>
  )
}

export default PlayButton