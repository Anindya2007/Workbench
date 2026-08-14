import ResumePDF from '../../assets/Resume.pdf';

export default function Resume() {

    return (
        <div className='w-full h-full'>
            <div className='w-full h-fit px-5 py-1 flex gap-4 bg-[#0a1140]'>
                <button className=' rounded-xl px-2 py-0.5 text-white text-[18px] bg-gray-700 hover:bg-indigo-600'>Tech Resume</button>
                <button className=' rounded-xl px-2 py-0.5 text-white text-[18px] bg-gray-700 hover:bg-indigo-600'>Leadership Resume</button>
            </div>

        <embed
            src={ResumePDF}
            type="application/pdf"
            className="w-full h-full"
        />
        </div>
    );
}