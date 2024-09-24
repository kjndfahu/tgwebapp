import coin from "../assets/coin.png";
import {ArrowLeftRight, ArrowUp} from "lucide-react";
import {Coin} from "./Coin";

function Convertation() {
    return (
        <div className="flex flex-col mt-10 items-center">
            <div className="flex flex-col items-center gap-2">
                <h2 className="font-sfprosemibold text-[19px] text-white">Saldos de monedas</h2>
                <div className="flex flex-row items-center gap-2">
                    <h1 className="font-sfprosemibold text-[32px] leading-[35px] text-white">1,000</h1>
                    {/*<img className="w-[45px] h-[45px]" src={coin} alt="coin"/>*/}
                    <Coin className={"w-[30px] h-[30px]"}/>
                </div>
                <p className="text-[#b0b0b0] font-sfpromedium text-[12px]">≈ 0.5006250 EUR</p>
            </div>
        </div>
    )
}

//2890FF

export default Convertation