import Icon from './Icon.jsx';

export default function DesktopIcons({icons}){
    return(
        <div className=' absolute top-15 flex flex-col gap-10 px-4 py-4 ml-8 w-fit h-fit'>
            {icons.map((app)=>{
                return(<Icon app={app}/>)
            })}
        </div>
    )
}