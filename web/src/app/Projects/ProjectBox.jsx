import Button from '../../components/ui/ProjectButton.jsx';
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function PorjectBox({Sno,Name,Desc,Tech,GitLink,LiveLink}) {
    return (
        <div className='w-full h-fit py-3 px-3 rounded-2xl border border-indigo-200/40'>
            <div className='flex gap-4 w-full h-fit'>
                <h1 className='border border-violet-500 h-fit py-2 px-4 rounded-xl text-4xl text-white/80'>{Sno}</h1>

                <div>
                    <h1 className='text-2xl text-white/90'>{Name}</h1>
                    <p className='text-white/80 text-[15px]'>{Desc}</p>
                </div>

            </div>

            <hr className='text-white/40 ml-6 w-[80%] my-3 rounded-2xl'></hr>

            <div className='flex justify-between items-center px-4'>
                <p className='text-indigo-100 border border-white/10 bg-indigo-900/40 rounded-2xl px-2 py-1 w-fit text-md'>{Tech}</p>

                <div className='flex gap-4'>
                    <Button link={GitLink} icon={FaGithub} />
                    <Button link={LiveLink} icon={ExternalLink} />
                </div>
            </div>
        </div>

    )
}