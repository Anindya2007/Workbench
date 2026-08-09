

export default function ProjectButton({link,icon:Icon}){
    return(
        <a href={link} className='hover:shadow-[1px_2px_10px_rgba(255,255,255,0.4)] rounded-xl p-1 border hover:border hover:border-white ' target='_blank'><Icon className='bg-black rounded-2xl text-white ' size={27}/></a>
    )
}