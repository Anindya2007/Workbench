

export default function ProjectButton({link,icon:Icon}){
    return(
        <a href={link} className='rounded-xl p-1 border hover:border hover:border-white ' target='_blank'><Icon className='bg-black rounded-2xl text-white ' size={27}/></a>
    )
}