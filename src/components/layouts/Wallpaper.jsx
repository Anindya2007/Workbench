import Wallpaper from "../../assets/Wallpaper.png";

export default function WallpaperComponent() {
    return(
        <div className="inset-0 absolute -z-10">
            <img src={Wallpaper} alt="Wallpaper" className='h-full w-full'/>
        </div>
    )
}