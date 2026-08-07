import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Profiles(){

    const profiles=[
        { url:'https://www.linkedin.com/in/anindya-sarkar2007/',name:'Linkedin',icon:<FaLinkedin />},
        { url:'https://github.com/Anindya2007',name:'Github',icon:<FaGithub />},
        { url:'https://www.instagram.com/ani03610/',name:'Instagram',icon:<FaInstagram />},
        { url:'mailto:anindya.s25058@nst.rishihood.edu.in',name:'Email',icon:<FaEnvelope />},
    ]


    return(
        <div className='flex gap-2'>
            {profiles.map((profile,name)=>(
                <a key={name} href={profile.url} target='_blank' className=' border border-white/20 text-white text-3xl rounded-2xl bg-indigo-800/50 mt-4 p-2 hover:text-indigo-400 transition-all duration-300'>{profile.icon}</a>
            ))}
        </div>
    )
}
       