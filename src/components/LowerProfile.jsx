import Energia from "./Energia";
import StatisticEnergia from "./StatisticEnergia";
import {Clock, Finger} from "./Icons";

function LowerProfile() {
    return (
        <div className="flex flex-col ml-5 mt-8 mb-10">
            <h2 className="text-white text-left font-sfprosemibold text-[32px]">Estadisticas</h2>
            <StatisticEnergia/>
            <div className="flex flex-row gap-2 w-[90vw] mt-2">
                <div className="flex items-center px-5 py-3 bg-[#212121] gap-2 rounded-[17px] w-[45vw]">
                    <Finger/>
                    <div className="flex flex-col text-left gap-1">
                        <h2 className="font-sfpromedium text-white text-[22px] leading-[25px]">Toques</h2>
                        <p className="font-sfpromedium text-[#b0b0b0] text-[18px]"><span
                            className="font-sfprobold text-[20px] text-white">1</span> / tocar</p>
                    </div>
                </div>
                <div className="flex items-center px-5 py-3 bg-[#212121] rounded-[17px] gap-2 w-[45vw]">
                    <Clock/>
                    <div className="flex flex-col text-left gap-1">
                        <h2 className="font-sfpromedium text-white text-[22px] leading-[25px]">Pasivo</h2>
                        <p className="font-sfpromedium text-[#b0b0b0] text-[18px]"><span
                            className="font-sfprobold text-[20px] text-white">60</span> / hora</p>
                    </div>
                </div>
            </div>
            <div className="w-[90vw] h-[100px]"></div>
        </div>
    )
}

export default LowerProfile;