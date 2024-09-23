import ball from '../assets/discoball.gif'
import {Link2} from "lucide-react";
import {Light} from "./Icons";

function ModalRef() {
    return (
        <div className="flex flex-col bg-black ">
            <div className="px-5 mt-16 text-left">
                <h1 className="text-white font-sfprosemibold text-[44px]">Referencia</h1>
                <h2 className="text-white font-sfprosemibold text-[36px] leading-[38px] mt-5">Aumenta la energia de<br/>cada usuario invitado</h2>
                <p className="text-white font-sfpromedium text-[20px] mt-5">Invita a un amigo y aumenta tu energia</p>
            </div>
            <img className="w-[270px] h-[270px] self-center mt-10" src={ball} alt=""/>
            <div className="flex flex-col px-5 mt-5 text-white font-sfpromedium text-[25px]">
                <p >Referir via</p>
                <div className="flex flex-row items-center py-3 px-5 bg-[#212121] rounded-[15px] mt-2">
                    <h2>Enlace</h2>
                    <div className="text-[#2890FF] gap-3 flex flex-row text-[22px] px-7 py-1 rounded-[10px] active:bg-[#15406E]">
                        https://t.me/Marmotacoi...
                        <div className="rotate-[-45deg]">
                            <Link2 width={30} height={30} color="#2890FF"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between py-3 px-5 bg-[#212121] rounded-[15px] mt-2 mb-10">
                    <div className="flex flex-row gap-5">
                        <h2 className="text-white font-sfprosemibold text-[25px]">0</h2>
                        <h2 className="text-[#b0b0b0] font-sfpromedium text-[25px]">Invitar amigos</h2>
                    </div>
                    <div
                        className="flex flex-row bg-[#383838] rounded-[7px] gap-1 py-1 px-4 text-white text-[20px] font-sfpromedium">
                        <Light/>
                        <h4>0</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRef;