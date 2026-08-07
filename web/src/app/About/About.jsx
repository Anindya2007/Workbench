import AppWindowHeader from "../../components/window/AppWindowHeader";
import Intro from "./Intro";
import TechStack from "./TechStack.jsx";

export default function About() {
    return (
        <div className='w-[70%] h-[82%] absolute left-[15%] top-[8%] border-2 border-indigo-200/70 z-30 rounded-2xl overflow-hidden'>
            <AppWindowHeader name='About Me' />

            <div className='bg-[#091239]  h-full w-full flex px-4 pt-5'>

                <div className='w-[33%] h-[90%] border border-white/40 rounded-2xl '></div>

                <div>
                    <Intro />
                    <TechStack />
                </div>

            </div>

        </div>
    )
}