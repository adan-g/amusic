import { useState, useEffect } from "react";
import { RiPlayFill } from "react-icons/ri";
import { useFetch } from "../hooks/useFetch"

const Search = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState(null)
  const APIKEY = 'a976921a4acf4c6dbfaff3b69adac2a3'


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7398ff31cemshbe5ebe60c38bfebp147963jsnf768472a7f8b',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`, options)
      .then((response) => response.json())
      .then((data) => setData(data.data))
    console.log(data)
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
            <a className="flex items-center justify-between p-2">
              <div className="flex items-center gap-5">
                <img src={song.album.cover_small} />
                <p key={song.id}>{song.title}</p>
              </div>
              <div>
                <RiPlayFill className='text-2xl'/>
              </div>
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default Search