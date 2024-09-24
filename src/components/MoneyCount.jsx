import coin from "../assets/coin1.svg";
import {Coin} from "./Coin";


function MoneyCount() {
    return (
        <div className="flex items-center flex-col gap-2 mt-5" >
            <h4 className="text-[#b0b0b0] text-[19px] font-sfpromedium">Tu saldo</h4>
            <div className="flex flex-row items-center bg-[#b0b0b0] rounded-full text-white text-[22px] py-1 px-4 font-sfpromedium">
                {/*<img className="w-[40px]" src={coin} alt="coin"/>*/}
                <Coin className={"w-[25px] h-[25px]"}/>
                1,000
            </div>
        </div>
    )
}

export default MoneyCount