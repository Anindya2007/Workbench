import AppWindow from '../../components/window/AppWindow.jsx';
import ContactWallpaper from '../../assets/ContactWallpaper.png';
import ContactBox from './ContactBox.jsx';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Contact() {
    const contacts = [
        {
            icon: FaGithub,
            name: 'Github',
            link: 'https://github.com/Anindya2007'
        },
        {
            icon: FaLinkedin,
            name: 'Linkedin',
            link: 'https://www.linkedin.com/in/anindya-sarkar2007/'
        },
        {
            icon: FaEnvelope,
            name: 'Email',
            link: 'anindya.s25058@nst.rishihood.edu.in'
        },
        {
            icon: FaInstagram,
            name: 'Instagram',
            link: 'https://www.instagram.com/ani03610/'
        }
    ];

    return (
        <AppWindow Image={ContactWallpaper} name='Contact'>

            <div className='w-full h-full flex flex-col items-center gap-4 p-5'>

                <h1 className='text-5xl text-white'>Let's <span className='text-indigo-400'>Conntect</span></h1>
                <hr className='text-indigo-500 w-20 font-extrabold'></hr>
                <p className='text-indigo-50 w-[60%] text-[18px] font-light'>I'm open to internships , open-source contributions, freelance opportunities and collaborations.</p>

                <div className='flex items-center justify-center gap-10 w-full h-full'>
                {contacts.map((data,index)=>{
                    return <ContactBox key={index} name={data.name} icon={data.icon} link={data.link} />
                })}
                </div>

            </div>

        </AppWindow>
    )
};
