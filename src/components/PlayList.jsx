import { useEffect, useState } from 'react'
import { getPlayList } from '../api/getInfoPlayList.api'
import { formatTime } from '../utils/helperFunctions.js'
import PlayButton from "./PlayButton";
import DeleteButton from './DeleteButton.jsx';
import { usePlayerStore } from "../hooks/playerStore";

const PlayList = () => {
  const {
    setPlayList, playListModified, setPlayListModified
  } = usePlayerStore(state => state)
  const [list, setList] = useState([])
  const [music, setMusic] = useState(null)
  

  useEffect(() => {
    const loadPlayList = async () => {
      try {
        const res = await getPlayList();

        if (res.data) {
          setList(res.data);
          setPlayList({ playList: res.data })
          setPlayListModified(false)
        }
        
      } catch (error) {
        console.error('Error loading playlist:', error);
      }
    };

    loadPlayList();
  }, [playListModified]);

  const urlweb = 'https://deezerdevs-deezer.p.rapidapi.com/track/'

  const fetchMusicData = async (idMusicDeezer, idLocal) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
      },
    };

    try {
      const response = await fetch(`${urlweb}${idMusicDeezer}`, options);
      const data = await response.json();
      return { idLocal: idLocal, ...data };
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };


  useEffect(() => {
    const fetchMusicDataForList = async () => {
      const musicPromises = list.map((item) => fetchMusicData(item.id_music_deezer, item.id));
      const musicData = await Promise.all(musicPromises);
      
      //check reponse good and with data
      if (musicData) {
        setMusic(musicData);
      }
    };

    fetchMusicDataForList();
  }, [list]);

  //console.log(music)

  return (
    <div className=''>
      <input className='w-full top-0 fixed p-2' type="text" placeholder='Search music in my list' />

      <div className='mb-36 mt-10'>
        {
          music
            ?
            music?.map((song) => (
              <a
                key={song.idLocal}
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

                <div className='flex gap-2'>
                  <DeleteButton id={song.idLocal} />
                  <PlayButton id={song.id} />
                </div>
              </a>
            ))
            :
            <div className='mt-44'>
              <h1 className='text-2xl text-[#f0f9fe] text-center'>
                You don't have music added to your list yet
              </h1>

              <h1 className='text-2xl text-[#f0f9fe] text-center'>
                Go to the Search section to add music to your list
              </h1>
            </div>
        }
      </div>
    </div>
  )
}

export default PlayList