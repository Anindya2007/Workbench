import AppWindowHeader from '../../components/window/AppWindowHeader.jsx';
import Images from './Image.jsx';


import { gallery } from '../../config/app.js'

export default function Gallery() {
    return (
        <div className='w-[78%] h-[82%] absolute left-[10%] top-[8%] bg-[#050d33]  border-2 border-indigo-200/70 z-30 rounded-2xl overflow-hidden flex flex-col'>
           <AppWindowHeader name="Gallery" />


            <div className="w-full h-full overflow-y-auto bg-[#020617] py-5 px-6">
                <h1 className='text-indigo-200/90 text-4xl'>My Achievement Gallery</h1>
                <p className='text-indigo-200 text-md mb-4'>Below are some moments , achievements and memories of my journey till now.</p>
               <Images gallery={gallery}/>

            </div>

        </div>
    )
}