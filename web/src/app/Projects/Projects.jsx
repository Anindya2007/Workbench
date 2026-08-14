import AppWindowHeader from '../../components/window/AppWindowHeader.jsx';
import ProjectIntro from './ProjectAppIntro.jsx';
import ProjectBox from './ProjectCard.jsx';
import AddProject from './AddProject.jsx';

import {useState} from 'react';

export default function Projects() {

    const [Add,setAdd]= useState(true);
    const [Delete,setDelete]= useState(false);

    const [projects,setProject] = useState([
        {
            name: 'Workbench',
            desc: 'A browser based portfolio OS having each part as a working app.',
            tech: 'Full-Stack',
            gitlink: 'https://github.com/Anindya2007/Workbench',
            livelink: 'anindya-dev-space.vercel.app/'
        },
        {
            name: 'Weather App',
            desc: 'Real-time weather tracker with city-based search and live weather insights.',
            tech: 'Frontend',
            gitlink: 'https://github.com/Anindya2007/Weather-tracker',
            livelink: 'weather-tracker-weld.vercel.app'
        },
        {
            name: 'Gallery',
            desc: 'An platform similar to Pinrest to view images.',
            tech: 'Frontend',
            gitlink: 'https://github.com/Anindya2007/Gallery',
            livelink: 'gallery-steel-three.vercel.app'
        },
        {
            name: 'Prera Website',
            desc: 'The frontend website of a startup made with collaboration of 3 members.',
            tech: 'Frontend',
            gitlink: 'https://github.com/Anindya2007/prera-website',
            livelink: 'prera-website.vercel.app'
        },
        {
            name: 'Data Collector',
            desc: 'A dummy use data collecting platform using Node.js for practice',
            tech: 'Frontend',
            gitlink: 'https://github.com/Anindya2007/User-data-update',
            livelink: ''
        },
        {
            name: 'QuillSync',
            desc: 'Open-source contribution to a collaborative documentation and knowledge management platform.',
            tech: 'Frontend',
            gitlink: 'https://github.com/Anindya2007/QuillSync',
            livelink: ''
        },
        {
            name: 'Open Playground',
            desc: 'Open-source contributor to a community platform where developers showcase, discover, and share interactive web projects.',
            tech: 'Frontend',
            gitlink: 'https://github.com/Anindya2007/OpenPlayground',
            livelink: 'open-playground-sage.vercel.app/'
        },
        {
            name: 'Portfolio',
            desc: 'Open-source contributor under SSoC, helping improve a modern furniture e-commerce platform with responsive and interactive user experiences.',
            tech: 'Frontend',
            gitlink: 'https://github.com/Anindya2007/Furnix-SSoC26',
            livelink: 'furnix-neon.vercel.app/'
        }
    ]);


    return (
        <div className='w-[85%] h-[84%] absolute left-[10%] top-[6.7%] border-2 border-indigo-200/70 z-30 rounded-2xl overflow-hidden'>
            <AppWindowHeader name='Projects' />

            <div
                className=" h-[calc(100%-40px)] px-6 py-3 bg-[#020617] overflow-y-auto bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.15),_transparent_40%),linear-gradient(to_bottom,_#020617,_#030712)]">

                <ProjectIntro />


                <button className='border border-white/30 bg-indigo-900/40 px-2 py-1 mr-2 mb-3 text-md text-white rounded-2xl ease-in-out duration-100 hover:shadow-[1px_1px_5px_rgba(255,255,255,0.6)]' onClick={()=>setAdd(true)}>+ Add Project</button>
                <button className='border border-white/30 bg-indigo-900/40 px-2 py-1 ml-2 mb-3 text-md text-white rounded-2xl ease-in-out duration-100 hover:shadow-[1px_1px_5px_rgba(255,255,255,0.6)]' onClick={()=>setDelete(true)}>- Delete Project</button>


                <div className='w-full  grid grid-cols-3 gap-1 items-center mt-2'>
                    {projects.map((project, index) => {
                        return <ProjectBox key={index} Sno={index + 1} Name={project.name} Desc={project.desc} Tech={project.tech} GitLink={project.gitlink} LiveLink={project.livelink} />
                    })}
                </div>
            </div>

            {/* {Add && <AddProject/>} */}

        </div>


    )
}