import {Light, Rocket} from "./Icons";
import {ChevronRight} from "lucide-react";
import {useState} from "react";

function ProgressBar({isActive, setActive}) {
    return (
        <div >
            <div className="flex flex-row items-center justify-between text-white font-sfpromedium w-[90vw] h-[30px]">
                <div className="flex flex-row items-center text-[13px] gap-1">
                    <Light className={"w-[20px] h-[20px]"}/>
                    673/800
                </div>
                <div onClick={() => setActive(true)} className="flex flex-row items-center text-[13px] gap-1">
                    <Rocket className={"w-[18px] h-[18px]"}/>
                    Aumentar
                    <ChevronRight width={15} height={15} color="#ffffff"/>
                </div>
            </div>
            <div className="w-full bg-white rounded-full h-[8px]"></div>
        </div>
    )
}

export default ProgressBar;