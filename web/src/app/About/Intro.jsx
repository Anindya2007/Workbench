import {Check} from "lucide-react";

export default function Intro() {
    return(
        <div className=' w-[60%] absolute right-8 top-16 text-white p-2'>
                    <h1 className='text-2xl'>About Me</h1>

                    <div className='h-[5px] w-22 bg-indigo-500 rounded-2xl my-2'></div>

                    <p className='text-md w-[85%]'>I'm a Computer Science (AI & ML) student passionate about building modern web applications and contributing
                        to open source. Beyond development, I enjoy operations, outreach, and collaborating with communities to
                        turn ideas into meaningful projects.</p>

                    <div className='grid grid-cols-2 gap-2 mt-6'>
                        <div className='flex flex-col gap-2 border-r border-indigo-100/80 pr-2'>
                            <h1 className='text-xl text-white'>What I Do</h1>
                            <div className='h-[2px] w-12 bg-indigo-500 rounded-2xl my-2'></div>
                            <p className='text-indigo-100'>Building user-focused digital experiences through technology and collaboration.</p>
                            <ul type="disc">
                                <li className='text-indigo-100 flex gap-2 mb-1'>
                                    <Check size={20} className='text-indigo-400' />Frontend Development</li>

                                <li className='text-indigo-100 flex gap-2 mb-1'>
                                    <Check size={20} className='text-indigo-400' />Open Source</li>

                                <li className='text-indigo-100 flex gap-2'>
                                    <Check size={20} className='text-indigo-400' />Operations and Outreach</li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-2 pl-2.5'>
                            <h1 className='text-xl text-white'>I am Currently</h1>
                            <div className='h-[3px] w-12 bg-indigo-500 rounded-2xl my-1'></div>
                            <p className='text-indigo-100'>Focused on learning, building, and gaining real-world experience.</p>
                            <ul type="disc">
                                <li className='text-indigo-100 flex gap-2 mb-1'>
                                    <Check size={20} className='text-indigo-400' />Founding Intern Campus Connect</li>

                                <li className='text-indigo-100 flex gap-2 mb-1'>
                                    <Check size={20} className='text-indigo-400' />Building Workbench</li>

                                <li className='text-indigo-100 flex gap-2'>
                                    <Check size={20} className='text-indigo-400' />Open Source Conttribution</li>
                            </ul>
                        </div>
                    </div>
                </div>
    )
}