

export default function TaskbarApp({ app }) {
    return (
        <button className='w-12 h-12 flex cursor-pointer items-center 
                    justify-center rounded-2xl bg-[#161C38] border px-1 py-1
                    border-[#2E3863] shadow-[0_8px_20px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)] 
                    hover:transition-all hover:duration-200 hover:bg-[#222a50] 
                    hover:shadow-[0_8px_20px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.15)]'>

                        <img src={app.image} alt={app.name} className='w-12 h-9 rounded-xl' />

                    </button>
    )
}