import {Light, Shout} from "./Icons";
import {ChevronRight} from "lucide-react";
import {Link} from "react-router-dom";

function RefsBlock( ){
    return (
        <Link to="/references">
            <div className="flex items-center px-5 py-2 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                <div className="flex flex-row items-center gap-5">
                    <div className="rounded-[15px] bg-[#282828] p-2">
                        <Shout className={"w-[30px] h-[30px]"}/>
                    </div>
                    <div className="text-left">
                        <h2 className="font-sfpromedium text-white text-[16px] leading-[17px]">Invita a tus
                            amigos.<br/> Aumentar la energía</h2>
                        <p className="font-sfpromedium text-[13px] text-[#b0b0b0]">0 Amigo</p>
                    </div>
                </div>
                <ChevronRight color="#b0b0b0"/>
            </div>
        </Link>
    )
}

export default RefsBlock