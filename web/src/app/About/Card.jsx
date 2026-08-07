import { MapPin } from "lucide-react";
import Profiles from './Profiles.jsx';

export default function Card({ img, role, desc }) {
    return (
        <div className='w-[33%] h-[90%] bg-[#061240] border border-white/40 rounded-2xl  flex flex-col items-center justify-center'>
            <img src={img} className='rounded-[100%] h-71 w-62 border-1 border-indigo-600 p-1'/>
            <h1 className='text-4xl font-md text-white mt-3'>Anindya <span className='text-indigo-400'>Sarkar</span> </h1>
            <h1 className='text-[23px] text-violet-500 mt-2'>{role}</h1>

            <div className='flex gap-1 items-center justify-center mt-2'>
            <MapPin className='text-indigo-400 mt-2' size={20}/>
            <p className='text-white text-md font-light h-4'>India</p>
            </div>

            <hr className='w-[75%] border-white/30 mt-3' />

            <Profiles/>

        </div>)
}