import Button from '../../components/ui/ProjectButton.jsx';
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function PorjectBox({ Sno, Name, Desc, Tech, GitLink, LiveLink }) {
    return (
        <div className='w-[380px] h-[187.5px] py-3 px-3 rounded-2xl border border-indigo-200/40 flex flex-col mb-2'>
            <div className='flex gap-4 w-full h-fit mt-auto'>
                <h1 className='border border-violet-500 h-fit py-2 px-4 rounded-xl text-4xl text-white/80 cursor-default'>{Sno}</h1>

                <div>
                    <h1 className='text-2xl text-white/90 cursor-default'>{Name}</h1>
                    <p className='text-white/80 text-[15px] cursor-default line-clamp-3'>{Desc}</p>
                </div>

            </div>


            <div className='mt-auto'>
                <hr className='text-white/40 ml-6 w-[80%] my-3 rounded-2xl'></hr>
                <div className='flex justify-between items-center px-4 '>
                    <p className='text-indigo-100 cursor-default border border-white/10 bg-indigo-900/40 rounded-2xl px-2 py-1 w-fit text-md hover:shadow-[1px_1px_5px_rgba(129,140,248,0.5)]'>{Tech}</p>

                    <div className='flex gap-4'>
                        <Button link={GitLink} icon={FaGithub} />
                        <Button link={LiveLink} icon={ExternalLink} />
                    </div>
                </div>
            </div>
        </div>

    )
}