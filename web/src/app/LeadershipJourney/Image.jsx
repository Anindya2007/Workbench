import Damru from "../../assets/Gallery/Damru.jpeg";

export default function Image({gallery}){
    return(
         <div className="grid grid-cols-3 gap-5 py-2">

                    {gallery.map((item, index) => (
                        <div
                            key={index}
                            className="
                            group overflow-hidden rounded-2xl
                            border border-indigo-300/30
                            bg-[#080d2b]
                            transition-all duration-300
                            hover:border-indigo-400/70
                            hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]
                        "
                        >

                            {/* IMAGE */}
                            <div className="h-64 w-full overflow-hidden bg-black/30 flex items-center justify-center">
                                <img
                                    src={item.pic}
                                    alt={item.name}
                                    className="
                                    h-full w-full 
                                    object-cover
                                    
                                    transition-transform duration-500
                                    group-hover:scale-105
                                "
                                />
                            </div>

                            {/* INFORMATION */}
                            <div className="p-3 bg-black/40 backdrop-blur-md border-t border-white/10 rounded-b-xl">

                                <h2 className="text-xl font-semibold text-white">
                                    {item.name}
                                </h2>

                                <p className="mt-0 text-indigo-300 font-medium mb-0">
                                    {item.role}
                                </p>

                                <p className="mt-1 text-md leading-relaxed text-white line-clamp-2">
                                    {item.desc}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>
    )
}