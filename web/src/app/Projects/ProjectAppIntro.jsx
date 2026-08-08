import ProjectStat from './ProjectStat.jsx'

export default function ProjectIntro(){
    return(<div className='w-[95%] h-[250px] mx-auto absolute top-18 flex justify-between'>

        <div>

        <div className='flex items-center gap-2 py-1 px-2 border border-indigo-400 w-fit rounded-3xl'>
            <div className='bg-violet-700 h-2 w-2 rounded-3xl'></div>
            <h1 className='text-white text-[15px] shadow-[0_1px_5px_rgba(99, 102, 241, 0.7)]'> My Work</h1>
        </div>

        <h1 className='text-6xl text-white font-semibold mt-3'>Projects</h1>
        <p className='py-1 text-indigo-100 text-[18px]  mt-2.5 font-light w-[80%]'>The projects showcasing my skills ,creativity and passion for building impactful solutions.</p>

        </div>

       <ProjectStat/>
    </div>)
}