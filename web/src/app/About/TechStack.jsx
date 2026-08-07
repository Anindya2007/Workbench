import {
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiJavascript,
    SiHtml5,
    SiTailwindcss,
    SiGit,
    SiGithub,
} from "react-icons/si";

export default function TechStack() {
    const techStack = [
        { name: "React",txtcolor:'blue', icon: SiReact },
        { name: "Node.js",txtcolor:'green', icon: SiNodedotjs },
        { name: "Express",txtcolor:'red', icon: SiExpress },
        { name: "JavaScript",txtcolor:'yellow', icon: SiJavascript },
        { name: "HTML5",txtcolor:'orange', icon: SiHtml5 },
        { name: "Tailwind CSS",txtcolor:'teal', icon: SiTailwindcss },
        { name: "Git", txtcolor:'purple', icon: SiGit },
        { name: "GitHub", txtcolor:'gray', icon: SiGithub },
    ];
    return (
        <div className=' bg-[#091441] h-fit w-fit border border-white/20 px-5 py-2 absolute left-100 bottom-4 rounded-xl  grid grid-cols-4 gap-2 items-center justify-center'>
            {techStack.map(({name,txtcolor, icon: Icon})=>(
                <div key={name} className='flex flex-col items-center justify-center p-2 w-fit h-fit pr-3'>
                    <Icon className='text-4xl' style={{color:`${txtcolor}`}} />
                    <p className='text-md mt-1 w-fit text-white'>{name}</p>
                </div>
            ))}
        </div>
    )
}