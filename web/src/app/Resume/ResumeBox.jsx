import AppWindowHeader from "../../components/window/AppWindowHeader.jsx";
import Resume from './Resume.jsx'

export default function ResumeApp(){
    return(
        <div className='w-[70%] h-[82%] absolute left-[15%] top-[8%] border-2 border-indigo-200/70 z-30 rounded-2xl overflow-hidden'>
            <AppWindowHeader name='Resume'/>
            <Resume/>
        </div>
    )
}