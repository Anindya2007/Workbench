

export default function ProjectsStatData({Data,icon:Icon,name}) {
    return(<div className='flex flex-col items-center py-2 px-1 gap-1.5 border-r border-indigo-200/60 last:border-r-0'>

        <div className='flex items-center gap-4'>

        <Icon className='text-violet-500' size={35}/>
        <h1 className='text-3xl font-bold text-violet-300'>{Data}</h1>

        </div>
        <p className='text-violet-100'>{name}</p>
    </div>)
}