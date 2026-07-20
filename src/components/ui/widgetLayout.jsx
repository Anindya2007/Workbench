

export default function WidgetLayout({children,style=''}){
    return(<div className={`border border-white/20 rounded-2xl px-5 py-3 bg-[#080C25] 
    shadow-[0_2px_10px_rgba(0,0,0,0.5)] transition-all duration-200 ease-out cursor-default
 hover:border-white/25 hover:-translate-y-0.5 hover:shadow-[0_0_10px_rgba(165,180,252,0.5)] ${style}`}>

        {children}
 </div>
 )
}