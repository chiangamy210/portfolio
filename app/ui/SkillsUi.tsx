import {TailwindIcon,ReactIcon,NextIcon,CssIcon,JavaScriptIcon,JavaIcon, SqlIcon, SpringbootIcon} from '../components/Icons';


export default function SkillsUi(){
    const hoverColor = 'fill-red-600';
    const iconColor = 'fill-white'
    return (
        <div className=" w-full h-[300px] xl:w-[1280px] text-white">
            <div className="grid gap-y-3 gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-30 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
                <ReactIcon  className={`${iconColor} hover:${hoverColor}`}  />
                <NextIcon className={`${iconColor} hover:${hoverColor}`} />
                <JavaScriptIcon className={`${iconColor} hover:${hoverColor}`} />                
                <TailwindIcon className={`${iconColor} hover:${hoverColor}`}  />
                <CssIcon className={`${iconColor} hover:${hoverColor}`}  />
                <JavaIcon className={`${iconColor} hover:${hoverColor}`}  />
                <SpringbootIcon className={`${iconColor} hover:${hoverColor}`}  />
                <SqlIcon className={`${iconColor} hover:${hoverColor}`}  />
            </div>
        </div>
     )
}