import {useState} from "react";
import {BigRocket, Clock, Explosion, Finger, Shout} from "./Icons";
import {ChevronRight} from "lucide-react";

function Benefits({setActiveToques, setActivePasivos, setActive}) {
    const [isTab, setTab] = useState('benefits');
    console.log(isTab)
    return (
        <div className="flex flex-col gap-5 rounded-[10px]">
            <div
                className="flex flex-row items-center px-5 py-2 justify-between font-sfprosemibold text-[30px] text-[#212121]">
                <h2 onClick={() => setTab('benefits')}>Beneficios</h2>
                <h2 onClick={() => setTab('aumentacion')}>Aumentacion</h2>
            </div>

            {isTab === 'benefits' ? (
                <div
                    className="flex flex-col items-center px-5 py-2 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                    <div onClick={() => setActivePasivos(true)}
                         className="flex items-center px-5 py-2 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                        <div className="flex flex-row items-center gap-5">
                            <div className="rounded-[15px] bg-[#282828] p-2">
                                <Clock/>
                            </div>
                            <div className="text-left">
                                <h2 className="font-sfpromedium text-white text-[23px]">Pasivo</h2>
                                <p className="font-sfpromedium text-[#b0b0b0]">0 Amigo</p>
                            </div>
                        </div>
                        <ChevronRight color="#b0b0b0"/>
                    </div>

                    <div onClick={() => setActiveToques(true)}
                         className="flex items-center px-5 py-2 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                        <div className="flex flex-row items-center gap-5">
                            <div className="rounded-[15px] bg-[#282828] p-2">
                                <Finger/>
                            </div>
                            <div className="text-left">
                                <h2 className="font-sfpromedium text-white text-[23px]">Toques</h2>
                                <p className="font-sfpromedium text-[#b0b0b0]">0 Amigo</p>
                            </div>
                        </div>
                        <ChevronRight color="#b0b0b0"/>
                    </div>

                    <div onClick={() => setActive(true)}
                         className="flex items-center px-5 py-2 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                        <div className="flex flex-row items-center gap-5">
                            <div className="rounded-[15px] bg-[#282828] p-2">
                                <Explosion/>
                            </div>
                            <div className="text-left">
                                <h2 className="font-sfpromedium text-white text-[23px]">Energia extra</h2>
                                <p className="font-sfpromedium text-[#b0b0b0]">0 Amigo</p>
                            </div>
                        </div>
                        <ChevronRight color="#b0b0b0"/>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <BigRocket/>
                    <h2 className="text-white font-sfprosemibold text-[36px]">Not yet</h2>
                    <p className="text-[#b0b0b0] font-sfpromedium text-[20px]">Boosts coming soon</p>
                </div>
            )}
        </div>
    )
}

export default Benefits;