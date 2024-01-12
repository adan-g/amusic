import { useEffect, useRef, useState } from "react";
import { RiPlayCircleFill } from "react-icons/ri";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { RiPauseCircleFill } from "react-icons/ri";
import { usePlayerStore } from "../hooks/playerStore";
import InputSlider from "./Slider";

const CurrentSong = (props) => {
  return (
    <div className="flex">
      <picture className="mr-2">
        <img src={props.image} />
      </picture>

      <div className="">
        <p className="font-bold">
          {props.title}
        </p>

        <p>
          {props.artist}
        </p>
      </div>
    </div>
  )
}

const Player = () => {
  const { currentMusic, isPlaying, setIsPlaying } = usePlayerStore(state => state)
  const audioRef = useRef()
  const [volume, setVolume] = useState(100); 

  useEffect(() => {
    isPlaying
      ? audioRef.current.play()
      : audioRef.current.pause()
  }, [isPlaying])

  useEffect(() => {
    const { song } = currentMusic
    console.log(song)
    if (song) {
      audioRef.current.src = `${song.preview}`
      audioRef.current.play()
    }
  }, [currentMusic])

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }


  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
  }

  return (

    <div className="bg-sky-700 w-full p-2 flex bottom-14 fixed flex-col items-center">
      <div className="flex justify-between w-full">
        <CurrentSong
          image={currentMusic.song?.album?.cover_small}
          title={currentMusic.song?.title}
          artist={currentMusic.song?.artist.name}
        />

        <audio ref={audioRef} />

        <div className="flex items-center">
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
        </div>
      </div>

      <InputSlider value={volume} onChange={handleVolumeChange} />
    </div>

  )
}

export default Player