

export default function Calendar({data}) {

      const palette = {
    "0": "#1E293B", // slate-800
    "1": "#183B2D",
    "2": "#256D4A",
    "3": "#4ADE80",
    "4": "#86EFAC"
};

    return (<div className='grid grid-cols-15 gap-1 w-fit w-max-full cursor-default transition-all duration-200 ease-out py-1 px-2
        rounded-md '>

        {data.map((day, index) => {
            return (<div key={index} className='h-3.5 w-3.5 ' style={{ backgroundColor: `${day.intensity < 4 ? palette[day.intensity] : palette['4']}`, borderRadius: '2px' }}></div>)
        })}

    </div>)
}