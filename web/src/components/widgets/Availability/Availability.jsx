import {User} from 'lucide-react'
import WidgetLayout from '../../ui/widgetLayout.jsx';
import Show from './ShowAvailability.jsx';

export default function Availability() {


    return(<WidgetLayout style={''}>
      <Show/>

        <hr className='text-indigo-100/30 mb-2'></hr>

        <div className='flex items-center gap-5'>
            <User size={35} className=' text-indigo-100/90' />
            <div>
                <p className=' text-indigo-100/80 font-light my-0 text-[15px]'>Open to Internships</p>
                <p className=' text-indigo-100/80 font-light my-0 text-[15px]'>& Freelance Projects</p>
            </div>
        </div>
    </WidgetLayout>)
}