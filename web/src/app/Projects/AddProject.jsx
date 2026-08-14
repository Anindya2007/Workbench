import {useState} from 'react';

export default function AddProject(){

        return(
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-[500px] rounded-2xl border border-indigo-400 bg-[#0a1140] overflow-hidden">

                <div className="h-12 px-4 flex items-center justify-between border-b border-white/20">
                    <h2 className="text-white text-lg">Add Project</h2>

                    <button
                        
                        className="text-white text-xl"
                    >
                        ×
                    </button>
                </div>

                <form
                    
                    className="p-5 flex flex-col gap-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Project Name"
                        value={formData.name}
                        // onChange={handleChange}
                        className="bg-transparent border border-white/20 rounded-lg px-3 py-2 text-white outline-none"
                        required
                    />

                    <textarea
                        name="desc"
                        placeholder="Project Description"
                        value={formData.desc}
                        // onChange={handleChange}
                        className="bg-transparent border border-white/20 rounded-lg px-3 py-2 text-white outline-none resize-none h-24"
                        required
                    />

                    <input
                        type="url"
                        name="gitlink"
                        placeholder="GitHub Link"
                        value={formData.gitlink}
                        // onChange={handleChange}
                        className="bg-transparent border border-white/20 rounded-lg px-3 py-2 text-white outline-none"
                        required
                    />

                    <input
                        type="url"
                        name="livelink"
                        placeholder="Hosted Link"
                        value={formData.livelink}
                        // onChange={handleChange}
                        className="bg-transparent border border-white/20 rounded-lg px-3 py-2 text-white outline-none"
                    />

                    <button
                        type="submit"
                        className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                    >
                        Add Project
                    </button>
                </form>

            </div>
        </div>
        )
}