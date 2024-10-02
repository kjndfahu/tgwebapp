import {Explosion, Light} from "./Icons";
import {ChevronRight} from "lucide-react";
import {Link} from "react-router-dom";

function StatisticEnergia() {
    return (
        <Link to="/references">
            <div>
                <div className="flex items-center px-5 py-3 bg-[#212121] rounded-[20px] justify-between w-[90vw]">
                    <div className="flex flex-row items-center gap-5">
                        <Explosion className={"w-[30px] h-[30px]"}/>
                        <div className="flex flex-col text-left gap-1">
                            <h2 className="font-sfpromedium text-white text-[16px] leading-[18px]">Energia</h2>
                            <div className="flex flex-row gap-1">
                                <Light className={"w-[18px] h-[18px]"}/>
                                <p className="font-sfpromedium text-[13px] text-[#b0b0b0]">100 / Amigo</p>
                            </div>
                        </div>
                    </div>

                    <ChevronRight width={20} height={20} color="#b0b0b0"/>
                </div>
            </div>
        </Link>
    )
}

export default StatisticEnergia