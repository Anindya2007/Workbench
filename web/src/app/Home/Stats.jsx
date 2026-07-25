import { useState,useEffect } from 'react';
import StatData from './StatBox.jsx';
import { FaGithub } from "react-icons/fa";
import {Code,SquareCode} from 'lucide-react';

export default function Stats(){

    const [github,setGithub]=useState({});
        const API = import.meta.env.VITE_API_URL
    
        async function getGithubData(){
            const response =await fetch (`${API}/github/repo-data`)
            const data=await response.json();
    
            setGithub(data);
        };
    
        useEffect(()=>{
            getGithubData();
        },[]);

    return (
        <div className='w-[80%] h-[85px] rounded-2xl border border-white/15 grid grid-cols-3 m-auto'>
            <StatData name='Projects' data={github.repositories} icon={Code} style={'border-r border-white/20'}/>
            <StatData name='Contributions' data={github.contributions} icon={FaGithub} style={'border-r border-white/20'}/>
            <StatData name='Technologies' data={6} icon={SquareCode}/>
            
        </div>
    )
}