import List from '../lib/playList.json'

const PlayList = () => {
  return (
    <div className=''>
      <input className='w-full top-0 fixed p-2' type="text" placeholder='Search music in my list' />

      <div className='mb-14 mt-10'>
        {List.data.map(list => (
          <a key={list.id} className='flex p-2 bg-slate-600 gap-5 items-center'>
            <picture className='h-12 w-12 block'>
              <img src={list.title} className='object-cover w-full h-full' />
            </picture>
            <p>{list.title}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default PlayList