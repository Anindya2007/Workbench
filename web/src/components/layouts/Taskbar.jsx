import Home from '../../assets/Home.png';
import App from '../ui/TaskbarApp.jsx';

export default function Taskbar({ icons }) {
    return (
        <div className="h-18 flex gap-20 items-center absolute bottom-1 left-5 right-5 
        px-2 py-1 rounded-xl bg-[#0D1028] backdrop-blur-xl border border-white/30 z-10">

            <button className='text-white text-3xl bg-[#0D1028] shadow-[0_8px_20px_rgba(0,0,0,0.35)] 
            border border-white/15  rounded-2xl px-3 py-1 ml-4'>A</button>

            <div className='flex items-center gap-8 justtify-center border-l border-white/20 pl-5 '>

                <App app={{'id':0,'name':'Home','image':Home,'active':false}}/>
                
                {icons.map((app) => {

                    return (<App app={app} />)

                })}

            </div>
        </div>
    )
}



