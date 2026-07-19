

export default function TopBar({Date,Time}) {
    return(
    <div className=" absolute top-0 w-full h-12 flex items-center justify-between px-8
     bg-[#010418]/90 backdrop-blur-ld border-b border-white/10 z-10">
        <p className='text-white text-xl font-stretch-100%'> Anindya's WorkBench</p>

        <div className='flex items-center text-white  gap-8'>
            <p className='p-2 hover:bg-white/13 hover:rounded-xl hover:shadow-[inset_0_0_15px_rgba(256,256,256,0.15)]'>{Date}</p>
            <p className='p-2 hover:bg-white/13 hover:rounded-xl hover:shadow-[inset_0_0_15px_rgba(256,256,256,0.15)]'>{Time}</p>
        </div>
    </div>
    )
};