import { useState, useEffect } from "react";

import Wallpaper from "./Wallpaper.jsx";

import TopBar from "./TopBar.jsx";
import DesktopIcons from "../window/DesktopIcons.jsx";
import Home from "../../app/Home/Home.jsx";
import ClockWidget from '../widgets/Clock/ClockWidget.jsx';
import GithubWidget from '../widgets/Github/Github.jsx';
import Availability from '../widgets/Availability/Availability.jsx';
import Taskbar from "./Taskbar.jsx";

import {apps} from '../../config/app.js';


export default function Desktop() {

    function OpenApp(id){
        setWindow(prev=>
        prev.map((data)=>{
           return data.id==id? {...apps,isOpen:!data.isOpen}:data
    }));
    };

    const [window,setWindow] = useState(
        apps.map((data)=>{
            return({...data,isOpen:false,isMinimised:false})
        })
    );

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

            <DesktopIcons icons={apps} operation={OpenApp}/>
            <Home/>

            <div className=' absolute right-5 top-15 w-1/4 flex flex-col gap-5 h-[calc(100%-9rem)] z-10'>
            <ClockWidget time={obj}/>
            <GithubWidget/>
            <Availability/>
            </div>

            <Taskbar icons={window} />
        </div>
    )
}