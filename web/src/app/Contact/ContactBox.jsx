import { SquareArrowOutUpRight } from "lucide-react";

export default function ContactBox({name,icon:Icon,link}){
    return(
        <div className='w-35 h-60 rounded-xl bg-[rgba(14,18,41,1)] border-1 border-white/35 overflow-hidden z-30 flex flex-col items-center justify-center gap-5 p-5
        transition-all duration-200 hover:shadow-[0_2px_15px_rgba(79,70,229,0.7)] hover:translate-y-[-3px]'>
            <Icon size={40} className='text-indigo-200'/>
            <h1 className='text-white text-2xl cursor-default'>{name}</h1>
            <a href={link} target='_blank' rel='noopener noreferrer' className='hover:shadow-[0_1px_5px_rgba(256,256,256,0.5)] rounded-xl'>
                <SquareArrowOutUpRight className='text-indigo-400 border-1 border-white/30 p-2 rounded-xl h-12 w-12 font-bold'/>
            </a>
        </div>
    )
};