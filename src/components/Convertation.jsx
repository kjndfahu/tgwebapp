import coin from "../assets/coin.png";
import {ArrowLeftRight, ArrowUp} from "lucide-react";
import {Coin} from "./Coin";

function Convertation() {
    return (
        <div className="flex flex-col mt-24 items-center">
            <div className="flex flex-col items-center gap-2">
                <h2 className="font-sfprosemibold text-[30px] text-white">Saldos de monedas</h2>
                <div className="flex flex-row items-center gap-2">
                    <h1 className="font-sfprosemibold text-[64px] leading-[60px] text-white">1,000</h1>
                    {/*<img className="w-[45px] h-[45px]" src={coin} alt="coin"/>*/}
                    <Coin className={"w-[45px] h-[45px]"}/>
                </div>
                <p className="text-[#b0b0b0] font-sfpromedium text-[20px]">≈ 0.5006250 EUR</p>
            </div>
        </div>
    )
}

//2890FF

export default Convertation