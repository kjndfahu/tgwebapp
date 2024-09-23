import {Light, Rocket} from "./Icons";
import {ChevronRight} from "lucide-react";
import {useState} from "react";

function ProgressBar({isActive, setActive}) {
    return (
        <div className="mt-[-20px]">
            <div className="flex flex-row items-center justify-between text-white font-sfpromedium w-[90vw] h-[30px]">
                <div className="flex flex-row items-center gap-1">
                    <Light width={20} height={20}/>
                    673/800
                </div>
                <div onClick={() => setActive(true)} className="flex flex-row items-center gap-1">
                    <Rocket/>
                    Aumentar
                    <ChevronRight color="#ffffff"/>
                </div>
            </div>
            <div className="w-full bg-white rounded-full h-[15px]"></div>
        </div>
    )
}

export default ProgressBar;