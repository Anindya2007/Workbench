import AppWindowHeader from "../../components/window/AppWindowHeader";
import Intro from "./Intro";
import TechStack from "./TechStack.jsx";
import Pic from "../../assets/Profile.jpeg";
import Card from "./Card.jsx";


export default function About() {
    return (
        <div className='w-[70%] h-[82%] absolute left-[15%] top-[8%] border-2 border-indigo-200/70 z-30 rounded-2xl overflow-hidden'>
            <AppWindowHeader name='About Me' />

            <div className='bg-[#050d33]  h-full w-full flex px-4 pt-5'>

                
                <Card img={Pic} role='Frontend Developer' desc='Computer Science (AI & ML) student passioante about building responsive frotend UI along with it have expereicne in Operations ,Outreach and Management.' />
                

                <div>
                    <Intro />
                    <TechStack />
                </div>

            </div>

        </div>
    )
}