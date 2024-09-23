import {Light} from "./Icons";
import {ChevronRight} from "lucide-react";

function Energia({setActiveDuplicate}) {
    return (
        <div onClick={() => setActiveDuplicate(true)} className="flex items-center px-5 py-2 bg-[#212121] rounded-[10px] justify-between mt-7 w-[90vw]">
            <div className = "flex flex-row items-center gap-5" >
                <div className="rounded-[15px] bg-[#282828] p-2">
                    <Light/>
                </div>
                <div className="text-left">
                    <h2 className="font-sfpromedium text-white text-[20px] leading-[25px]">Duplica tu energía</h2>
                    <p className="font-sfpromedium text-[#b0b0b0]">Duplique su energía máxima<br/> con una suscripción
                        al canal<br/> promocional</p>
                </div>
            </div>

            <ChevronRight color="#b0b0b0"/>
        </div>
    )
}

export default Energia
