import {useState} from 'react';
import TechResumePDF from '../../assets/Resume.pdf';
import LeadershipResumePDF from '../../assets/LeadershipResume.pdf';


export default function Resume() {
    const [pdf,setPdf]=useState(TechResumePDF);
    const [pdfData,setPdfData]=useState({
        leadership:false,
        techClicked:true,
        leadershipClicked:false
    });

    return (
        <div className='w-full h-full'>
            <div className='w-full h-fit px-5 py-1 flex gap-4 bg-[#0a1140]'>
                <button className={`cursor-default rounded-xl px-2 py-0.5 text-white text-[18px] ${pdfData.techClicked ? 'bg-indigo-600' : 'bg-gray-700'} hover:bg-indigo-600`}  onClick={()=>setPdfData({leadership:false,techClicked:true,leadershipClicked:false})}>Tech Resume</button>
                <button className={`cursor-default rounded-xl px-2 py-0.5 text-white text-[18px] ${pdfData.leadershipClicked ? 'bg-indigo-600' : 'bg-gray-700'} hover:bg-indigo-600`}  onClick={()=>setPdfData({leadership:true,leadershipClicked:true,techClicked:false})}>Leadership Resume</button>
            </div>

        <embed
            src={!pdfData.leadership? TechResumePDF:LeadershipResumePDF}
            type="application/pdf"
            className="w-full h-full"
        />
        </div>
    );
}