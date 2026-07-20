import {useState , useEffect} from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import '../../../styles/ClockWidget.css';

export default function ClockWidget({time}){
    const [Time,period]=time.toLocaleTimeString([],{
                hour:'2-digit',
                minute:'2-digit',
                hour12:true
            }).split(' ');
    
    // const [D]=useState(time.toLocaleDateString([],{
    //     weekday:'long',
    //     day:'numeric',
    //     month:'Long',
    //     year:'numeric'
    // }))


    // console.log(typeof period);

    return(<div className='border border-white/20 rounded-2xl px-5 py-3 bg-[#080C25] 
    shadow-[0_2px_10px_rgba(0,0,0,0.5)] grid grid-cols-2'>

        <Clock value={time} renderHourMarks={true} renderMinuteHand={true} renderSecondHand={true} secondHandLength={80}
        hourHandWidth={3} secondHandWidth={0.75} size={120}
        />

        <div className='flex flex-col items-center justify-center'>
            <p className=' text-xl font-medium text-indigo-300'>

                <span className='text-4xl font-medium mr-1 text-white'>{Time}</span>

                 {period.toUpperCase()}</p>
        </div>

    </div>)
}