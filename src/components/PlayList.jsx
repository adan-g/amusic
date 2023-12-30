import List from '../lib/playList.json'

const PlayList = () => {
  return (
    <div className='absolute w-full'>
      {List.map(list => (
        <a id={list.cover} className='flex p-2 bg-slate-600 gap-5 items-center'>
          <picture className='h-12 w-12 block'>
            <img src={list.cover} className='object-cover w-full h-full' />
          </picture>
          <p>{list.title}</p>
        </a>
      ))}
    </div>
  )
}

export default PlayList