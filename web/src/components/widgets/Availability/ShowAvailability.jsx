import {Power} from 'lucide-react';
import {useState} from 'react';

export default function ShowAvailability() {

    const [state, setState] = useState({
        available:true,
        color:'h-3 w-3 rounded-2xl bg-green-600 shadow-[0_0_10px_rgba(1, 211, 1,0.6)]'
    });

    function Change(){
        setState(prevState => ({
            ...prevState,
            available: !prevState.available
        }));
    }

    return(
          <div className='mb-3'>

                <div className='flex items-center justify-between p-0'>
                <p className='text-indigo-100/85 ml-3 text-[15px] cursor-pointer'>Availability</p>
                <button onClick={Change}><Power size={20} className='text-indigo-100/80 cursor-pointer' /> </button>
                </div>

            <div className='flex items-center gap-3 mt-2'>

                <div className={state.available? state.color:'h-3 w-3 rounded-2xl bg-red-500 '}></div>
                <p className='text-indigo-100/80 font-light my-0 text-xl'>{state.available? 'Available':'Not Available'}</p>

            </div>

        </div>
    )
}