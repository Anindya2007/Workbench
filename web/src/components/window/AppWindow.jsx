import Header from './AppWindowHeader.jsx';

export default function AppWindow({children, name,Image=''}){
    return(
    <div className='w-[810px] h-[520px] absolute left-[18%] top-[15%] rounded-xl border-3 border-white/35 overflow-hidden z-30'
        style={{backgroundImage:`url(${Image})`,backgroundSize:'cover',backgroundPosition:'center'}}>
        <Header name={name} />
        {children}
    </div>
)};