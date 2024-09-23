import {Explosion, Light} from "./Icons";
import {ChevronRight} from "lucide-react";
import {Link} from "react-router-dom";

function StatisticEnergia() {
    return (
        <Link to="/references">
            <div>
                <div className="flex items-center px-5 py-3 bg-[#212121] rounded-[20px] justify-between w-[90vw]">
                    <div className="flex flex-row items-center gap-5">
                        <Explosion/>
                        <div className="flex flex-col text-left gap-1">
                            <h2 className="font-sfpromedium text-white text-[22px] leading-[25px]">Energia</h2>
                            <p className="font-sfpromedium text-[#b0b0b0] text-[18px]"><span
                                className="font-sfprobold text-[20px] text-white">100</span> / Amigo</p>
                        </div>
                    </div>

                    <ChevronRight width={35} height={35} color="#b0b0b0"/>
                </div>
            </div>
        </Link>
    )
}

export default StatisticEnergia