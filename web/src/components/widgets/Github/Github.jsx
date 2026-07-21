import { useState, useEffect } from 'react';
import WidgetLayout from "../../ui/widgetLayout";
import WidgetHeader from "./WidgetHeader.jsx";
import Calendar from './GithubCalendar.jsx';


export default function Github() {
    const [activity, setActivity] = useState([]);

    const API = import.meta.env.VITE_API_URL

    useEffect(() => {

        async function fetchActivity() {
            try {
                const response = await fetch(`${API}/github/activity`);
                const data = await response.json();

                setActivity(data);
            } catch (error) {
                console.error('Error fetching GitHub activity:', error);
            }
        }

        fetchActivity();

    }, []);


    return (<WidgetLayout style={'flex flex-col '}>

       <WidgetHeader />

        <div className='flex flex-row gap-2 items-center justify-center'>
            <div>
                <p className='text-indigo-100' style={{ fontSize: '15px' }}>Mon</p>
                <p className='text-indigo-100' style={{ fontSize: '15px' }}>Wed</p>
                <p className='text-indigo-100' style={{ fontSize: '15px' }}>Fri</p>
            </div>

            <Calendar data={activity} />

        </div>
    </WidgetLayout>)
}