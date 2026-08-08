import AppWindowHeader from '../../components/window/AppWindowHeader.jsx';
import ProjectIntro from './ProjectAppIntro.jsx';
import ProjectBox from './ProjectBox.jsx';

export default function Projects() {

    const projects=[
        {
            Sno:1,
            name:'Workbench',
            desc:'A browser based portfolio OS having each part as a working app.',
            tech:'Frontend',
            gitlink:'https://github.com/Anindya2007/Workbench',
            livelink:'anindya-dev-space.vercel.app/' 
        }
    ];

    return (
        <div className='w-[70%] h-[82%] absolute left-[15%] top-[8%] border-2 border-indigo-200/70 z-30 rounded-2xl overflow-hidden'>
            <AppWindowHeader name='Projects' />

            <div
                className=" min-h-screen px-6 py-3 bg-[#020617] bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.15),_transparent_40%),linear-gradient(to_bottom,_#020617,_#030712)]">

                    <ProjectIntro />

                    <div className='w-full hmin-h-screen grid grid-cols-3 gap-2 items-center absolute top-72'>
                        {projects.map((project,index) => {
                            return <ProjectBox key={index} Sno={project.Sno} Name={project.name} Desc={project.desc} Tech={project.tech} GitLink={project.gitlink} LiveLink={project.livelink}/>
                        })}
                    </div>
            </div>


        </div>


    )
}