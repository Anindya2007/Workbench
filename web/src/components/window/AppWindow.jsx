import Header from './AppWindowHeader.jsx';

export default function AppWindow({children, name}){
    return(
    <div className='w-[810px] h-[520px] absolute left-[18%] top-[15%] rounded-xl border-2 border-white/27 overflow-hidden z-30'>
        <Header name={name} />
        {children}
    </div>
)};