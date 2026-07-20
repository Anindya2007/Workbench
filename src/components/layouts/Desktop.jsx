import { useState, useEffect } from "react";
import Resume from '../../assets/Resume.png'
import About from '../../assets/About.png'
import Contact from '../../assets/Contact.png'
import Projects from '../../assets/Projects.png';
import Gallery from '../../assets/Gallery.png';
import Wallpaper from "./Wallpaper.jsx";

import TopBar from "./TopBar.jsx";
import DesktopIcons from "../window/DesktopIcons.jsx";
import ClockWidget from '../widgets/Clock/ClockWidget.jsx';
import Taskbar from "./Taskbar.jsx";

export default function Desktop() {

    const apps = [{
        'id': 1,
        'name': 'About Me',
        'image': About,
        'active': false
    },
    {
        'id': 2,
        'name': 'Projects',
        'image': Projects,
        'active': false

    },
    {
        'id': 3,
        'name': 'Resume',
        'image': Resume,
        'active': false
    },
    {
        'id': 4,
        'name': 'Contact',
        'image': Contact,
        'active': false
    },
    {
        'id': 5,
        'name': 'Gallery',
        'image': Gallery,
        'active': false
    }
    ];

    const [obj, SetObj] = useState(new Date());
    const [time, SetTime] = useState(obj.toLocaleTimeString([],
        {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        }));

    const [date, SetDate] = useState(obj.toLocaleDateString([], {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    }));

    //This use Effect below is the update time and date every second.
    useEffect(() => {
        const interval = setInterval(() => {
            SetObj(new Date());

            SetTime(obj.toLocaleTimeString([],
                {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                }));

            SetDate(obj.toLocaleDateString([], {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
                year:'numeric'
            }));

        }, 1000);

        return () => clearInterval(interval);

    }, [obj]);


    return (
        <div className="w-screen h-screen relative overflow-hidden">
            <Wallpaper />
            <TopBar Date={date} Time={time} />

            <DesktopIcons icons={apps} />

            <div className=' absolute right-5 top-15 w-1/4 h-[calc(100%-9rem)]'>
            <ClockWidget time={obj}/>
            </div>

            <Taskbar icons={apps} />
        </div>
    )
}