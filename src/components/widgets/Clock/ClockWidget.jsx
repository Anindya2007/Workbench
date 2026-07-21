import WidgetLayout from '../../ui/widgetLayout';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import '../../../styles/ClockWidget.css';

export default function ClockWidget({time}){
    const [Time,period]=time.toLocaleTimeString([],{
                hour:'2-digit',
                minute:'2-digit',
                hour12:true
            }).split(' ');
    
    const Date=time.toLocaleDateString([],{
        weekday:'long',
        day:'numeric',
        month:'long',
        year:'numeric'
    }).split(' ');



        return(<WidgetLayout style='grid grid-cols-2'>

        <Clock value={time} renderHourMarks={true} renderMinuteHand={true} renderSecondHand={true} secondHandLength={80}
        hourHandWidth={3} secondHandWidth={0.75} size={120}
        />

        <div className='flex flex-col items-start justify-center gap-1'>
            <p className=' text-xl font-medium text-indigo-300 cursor-default'>

                <span className='text-4xl font-medium mr-1 text-white' cursor-default>{Time}</span>

                 {period.toUpperCase()}</p>
            
            <p className='text-indigo-100 text-xl cursor-default'>{Date[0].replace(',','')}</p>
            <p className='text-indigo-100 text-xl cursor-default'>{Date.splice(1,Date.length).join(' ')}</p>
        </div>

    </WidgetLayout>
    );
}