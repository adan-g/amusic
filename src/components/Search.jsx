import { useState, useEffect } from "react";
import PlayButton from "./PlayButton";
import SearchBar from "./SearchBar";

const Search = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState(null)
  const urlweb = 'https://deezerdevs-deezer.p.rapidapi.com/search?q='


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
    }
  };

  useEffect(() => {
    fetch(`${urlweb}${search}`, options)
      .then((response) => response.json())
      .then((data) => setData(data.data))
  }, [search])

  //search function
  const searcher = (e) => {
    setSearch(e.target.value)
  }

  const formatTime = time => {
    if (time == null) return `0:00`

    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60)

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div>
      <SearchBar
        value={search}
        onChange={searcher}
        className='w-full top-0 fixed p-2 shadow-md'
        type="text"
        placeholder='Search new music'
      />


      <div className='mb-14 mt-10'>
        {
          data?.map((song) => (
            <a
              key={song.id}
              className="flex items-center justify-between p-2 cursor-pointer text-[#f0f9fe]"
            >
              <div className="flex items-center gap-5">
                <img src={song.album.cover_small} alt={song.title} />
                <div className="flex flex-col">
                  <p className="text-sm">{song.title}</p>
                  <p className="text-xs text-[#43aaee]">{song.artist.name}</p>
                  <p className="text-xs text-[#43aaee]">{formatTime(song.duration)}</p>
                </div>
              </div>
      
              <div>
                <PlayButton id={song.id} />
              </div>
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default Search