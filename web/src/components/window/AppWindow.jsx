import Header from './AppWindowHeader.jsx';

export default function AppWindow({child, name}){
    return(
    <div className='w-[750px] h-[500px] absolute left-[20%] top-[15%] rounded-xl border-2 border-white/27'>
        <Header name={name} />
        {child}
    </div>
)};