import { useState, useEffect } from "react";
import PlayButton from "./PlayButton";

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

  return (
    <div>
      <input
        value={search}
        onChange={searcher}
        className='w-full top-0 fixed p-2 shadow-md'
        type="text"
        placeholder='Search music'
      />

      <div className='mb-14 mt-10'>
        {
          data?.map((song) => (
            <a
              key={song.id}
              className="flex items-center justify-between p-2 cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <img src={song.album.cover_small} alt={song.title} />
                <p>{song.title}</p>
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