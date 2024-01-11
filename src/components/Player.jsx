import { useEffect, useRef, useState } from "react";
import { RiPlayCircleFill } from "react-icons/ri";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { RiPauseCircleFill } from "react-icons/ri";
import { usePlayerStore } from "../hooks/playerStore";

const Player = () => {
  const { currentMusic, isPlaying, setIsPlaying } = usePlayerStore(state => state)
  const audioRef = useRef()

  useEffect(() => {
    isPlaying
      ? audioRef.current.play()
      : audioRef.current.pause()
  }, [isPlaying])

  useEffect(() => {
    const { song } = currentMusic
    if (song) {
      audioRef.current.src = `${song.preview}`
      audioRef.current.play()
    }
  }, [currentMusic])


  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="bg-sky-700 w-full p-3 flex justify-center gap-5 bottom-14 fixed">
      <RiArrowLeftDoubleFill className='text-3xl' />
      <button onClick={handleClick}>
        {
          isPlaying ?
            <RiPauseCircleFill className='text-3xl' />
            :
            <RiPlayCircleFill className='text-3xl' />
        }
      </button>
      <RiArrowRightDoubleLine className='text-3xl' />
      <audio ref={audioRef} />
    </div>
  )
}

export default Player