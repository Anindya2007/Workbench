import StatData from './ProjectStatData.jsx';
import {Code,GitPullRequest,Rocket} from 'lucide-react';

export default function ProjectStat(){

    const Data=[
        {
            name:'Projects',
            data:8,
            icon:Code 
        },
        {
            name:'Open Source',
            data:5,
            icon:GitPullRequest 
        },
        {
            name:'In Progress',
            data:2,
            icon:Rocket
        }
    ]

    return(<div className='border border-indigo-200 rounded-2xl grid grid-cols-3 w-[50%] h-fit'>
        {Data.map((item,index)=>{
            return(
                <StatData key={index} Data={item.data} icon={item.icon} name={item.name}/>
            )
        })}
    </div>)
}