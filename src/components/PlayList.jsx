import { getPlayList } from '../api/getInfoPlayList.api'
import { useEffect, useState } from 'react'

const PlayList = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    async function loadPlayList() {
      const res = await getPlayList()
      setList(res.data)
    }
    
    loadPlayList()
  }, [])
  
  return (
    <div className=''>
      <input className='w-full top-0 fixed p-2' type="text" placeholder='Search music in my list' />

      <div className='mb-14 mt-10'>
        {list.map(list => (
          <a key={list.id} className='flex p-2 bg-slate-600 gap-5 items-center'>
            <picture className='h-12 w-12 block'>
              <img src={list.singer_name} className='object-cover w-full h-full' />
            </picture>
            <p>{list.singer_name}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default PlayList