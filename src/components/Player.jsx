import { useRef, useState } from "react";
import { RiPlayCircleFill } from "react-icons/ri";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { RiPauseCircleFill } from "react-icons/ri";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(null)
  const audioRef = useRef()

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.src = `https://cdns-preview-9.dzcdn.net/stream/c-9bda0ec5904a809aa0c10f4d7a58a394-2.mp3`
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="bg-sky-700 w-full p-3 flex justify-center gap-5 bottom-14 fixed">
      <RiArrowLeftDoubleFill className='text-3xl' />
      <button onClick={handleClick}>
        {isPlaying ? <RiPauseCircleFill className='text-3xl' /> : <RiPlayCircleFill className='text-3xl' />}
      </button>
      <RiArrowRightDoubleLine className='text-3xl' />
      <audio ref={audioRef} />
    </div>
  )
}

export default Player