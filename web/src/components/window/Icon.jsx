

export default function Icon({ app ,change}) {


    return (<div className='flex flex-col gap-1 items-center justify-center cursor-pointer p-1.5
    hover:rounded-xl transition-all duration-250 ease-out 
    hover:translate-x-4 hover:bg-white/10
    hover:shadow-[inset_0_2px_20px_rgba(256,256,256,0.35)]'>

        <button className='border border-white/40 rounded-xl p-0.5' onClick={()=>change(app.id)}>
            <img src={app.image} alt={app.name} className='w-15 h-14 rounded-xl' />
        </button>

        <p className=" text-white text-md">{app.name}</p>
    </div>
    );
}