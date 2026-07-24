import AppWindow from '../../components/window/AppWindow.jsx';
import CodeSnippet from '../../assets/CodeSnippet.png'
import Stats from './Stats.jsx'

export default function Home() {
    return (<AppWindow>
        <div className='relative h-full w-full overflow-hidden bg-[#050816]'>
        <div className=" grid grid-cols-2 pt-6 px-3 mb-2 items-center">

            <div className='px-3'>
                <h1 className='text-2xl text-white'>Hi, I'm <span className='text-indigo-300 text-2xl'>Anindya Sarkar</span></h1>
                <p className='text-indigo-100 mt-2 font-extralight text-[15px]'>Frontend Developer | Open Source Contributor | Operations & Outreach</p>
                <p className='text-[15px] text-white mt-4 font-extralight'>Building modern web experiences while exploring open source, operations, outreach, and community building.</p>
            </div>

            <img src={CodeSnippet} alt="Code Snippet" className="object-contain rounded-3xl h-[300px] w-[500px] mt-4" />
        </div>

        <Stats/>
        </div>
    </AppWindow>);
};