import { useEffect, useRef, useState } from "react";
import { RiPlayCircleFill } from "react-icons/ri";
import { RiPauseCircleFill } from "react-icons/ri";
import { usePlayerStore } from "../hooks/playerStore";
import InputSlider from "./Slider";
import AddToList from "./AddToList";
import { fetchMusicData } from "../hooks/useFetch";
import { SkipToNext, SkipBack } from "./SkipButton";


const CurrentSong = (props) => {
  return (
    <div className="flex">
      <picture className="mr-2">
        <img src={props.image} />
      </picture>

      <div className="flex flex-col justify-center">
        <p className="font-bold text-sm text-[#f0f9fe]">
          {props.title}
        </p>

        <p className="text-xs text-[#193352]">
          {props.artist}
        </p>
      </div>
    </div>
  )
}

const SongControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    audio.current.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      audio.current.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime)
  }

  const formatTime = time => {
    if (time == null) return `0:00`

    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60)

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const duration = audio?.current?.duration ?? 0

  return (
    <div className="w-full flex gap-x-3 text-xs items-center">
      <span className="text-[#f0f9fe]">{formatTime(currentTime)}</span>
      <InputSlider
        value={currentTime}
        max={duration ? duration : 0}
        min={0}
        onChange={(value) => {
          const newCurrentTime = value.target.value
          audio.current.currentTime = newCurrentTime
        }}
      />
      <span className="text-[#f0f9fe]">
        {duration ? formatTime(duration) : '0:00'}
      </span>
    </div>
  )
}




const Player = () => {
  const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying, playList } = usePlayerStore(state => state)
  const audioRef = useRef()

  useEffect(() => {
    isPlaying
      ? audioRef.current.play()
      : audioRef.current.pause()
  }, [isPlaying])

  useEffect(() => {
    const { song } = currentMusic

    if (song) {
      fetch(song.preview)
        .then(response => response.blob())
        .then(blob => {
          audioRef.current.src = URL.createObjectURL(blob);
          return audioRef.current.play();
        })
    }

  }, [currentMusic])

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  const skipBack = async () => {
    const index = playList.findIndex(x => x.id_music_deezer == currentMusic.song.id)
    if (index == 0) {
      const data = await fetchMusicData(playList[playList.length - 1].id_music_deezer)
      setCurrentMusic({ song: data })
    } else {
      const data = await fetchMusicData(playList[index - 1].id_music_deezer)
      setCurrentMusic({ song: data })
    }
  }

  const skipToNext = async () => {
    const index = playList.findIndex(x => x.id_music_deezer == currentMusic.song.id)
    if (index == playList.length - 1) {
      const data = await fetchMusicData(playList[0].id_music_deezer)
      setCurrentMusic({ song: data })
    } else {
      const data = await fetchMusicData(playList[index + 1].id_music_deezer)
      setCurrentMusic({ song: data })
    }
  }

  return (

    <div className="bg-[#2d8fe3] w-full p-2 flex bottom-14 fixed flex-col items-center" >
      <div className="flex justify-between w-full">
        <CurrentSong
          image={currentMusic.song?.album?.cover_small}
          title={currentMusic.song?.title}
          artist={currentMusic.song?.artist.name}
        />

        <audio ref={audioRef} />

        <div className="flex items-center text-[#f0f9fe]">
          <AddToList id={currentMusic.song?.idLocal} />

          <SkipBack
            className='text-3xl'
            onClick={skipBack}
          />

          <button onClick={handleClick}>
            {
              isPlaying ?
                <RiPauseCircleFill className='text-3xl' />
                :
                <RiPlayCircleFill className='text-3xl' />
            }
          </button>
          <SkipToNext
            className='text-3xl'
            onClick={skipToNext}
          />
        </div>
      </div>

      <SongControl audio={audioRef} />

      {/* <InputSlider
        defaultValue={100}
        max={100}
        min={0}
        onChange={(value) => {
          setVolume(value.target.value);
          audioRef.current.volume = value.target.value / 100;
        }}
      /> */}
    </div>

  )
}

export default Player