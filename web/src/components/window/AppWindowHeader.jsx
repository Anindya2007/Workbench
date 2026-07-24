import {Minus,Square,X} from 'lucide-react';

export default function AppWindowHeader({name}) {
    return (
        <div className="w-full h-10 bg-[#0a1140] rounded-t-xl border-b border-white/27 flex items-center justify-between  px-4 py-2">
            <h2 className="text-white font-light text-[20px] font-bold">{name}</h2>
            
            <div className='flex items-center justify-center gap-2'>
                <button className='border border-white/20 rounded-xl p-1 bg-[#060c2f] text-white hover:bg-[#121b50]'><Minus size={20}/></button>
                <button className='border border-white/20 rounded-xl p-1 bg-[#060c2f] text-white hover:bg-[#121b50]'><Square size={20}/></button>
                <button className='border border-white/20 rounded-xl p-1 bg-[#060c2f] text-white hover:bg-[#121b50]'><X size={20}/></button>
            </div>

        </div>
    );
}