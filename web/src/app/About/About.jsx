import AppWindowHeader from "../../components/window/AppWindowHeader";
import Intro from "./Intro";


export default function About() {
    return (
        <div className='w-[70%] h-[82%] absolute left-[15%] top-[8%] border-2 border-indigo-200/70 z-30 rounded-2xl overflow-hidden'>
            <AppWindowHeader name='About Me' />

            <div className='bg-[#0b1544]  h-full w-full'>

                <Intro/>

            </div>

        </div>
    )
}