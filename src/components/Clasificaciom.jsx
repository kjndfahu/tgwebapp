import {Clock} from "./Icons";
import {ChevronRight} from "lucide-react";
import coin from "../assets/coin1.svg";
import {Coin} from "./Coin";

function Clasificaciom() {
    const data = [
        {
            id: 1,
            name: "Henry",
            value: "17M"
        },
        {
            id: 2,
            name: "Jegr",
            value: "13M"
        },
        {
            id: 3,
            name: "Kevin",
            value: "12M"
        },
        {
            id: 4,
            name: "Henry",
            value: "11.4M"
        },
        {
            id: 5,
            name: "Henry",
            value: "10.8M"
        },
        {
            id: 6,
            name: "Henry",
            value: "10M"
        },
        {
            id: 7,
            name: "Henry",
            value: "9.6M"
        },
        {
            id: 8,
            name: "Henry",
            value: "9.2M"
        },
        {
            id: 9,
            name: "Henry",
            value: "8.9M"
        },
        {
            id: 10,
            name: "Henry",
            value: "7.2M"
        },
        {
            id: 11,
            name: "Henry",
            value: "7.0M"
        },


    ]
    return (
        <div className="flex flex-col items-center bg-[url('https://i.imgur.com/IDlQwiO.png')] w-[100vw]">
            <div className="flex flex-col mt-10 gap-3">
                <h2 className="font-sfprosemibold text-left text-white text-[40px]">Clasificaciom</h2>
                <div className="flex items-center px-5 py-3 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                    <div className="flex flex-row items-center gap-2">
                        <div className="flex text-white p-1 bg-[#b0b0b0] rounded-[5px] text-[15px]">1k+</div>
                        <div className="bg-[#b0b0b0] w-[60px] h-[60px] rounded-full"></div>
                        <h2 className="text-white text-[23px] font-sfpromedium">bell</h2>
                    </div>
                    <div className="flex flex-row gap-2">
                        <h2 className="text-white text-[23px] font-sfpromedium">1.3k</h2>
                        {/*<img className="w-[35px] h-[35px]" src={coin} alt="coin"/>*/}
                        <Coin className={"w-[35px] h-[35px]"}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-7 gap-3">
                <h2 className="font-sfprosemibold text-left text-white text-[32px]">Jugadores top</h2>
                {data.map((item) => (
                    <div className="flex items-center px-5 py-3 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex text-white py-1 px-3 bg-[#b0b0b0] rounded-[5px] text-[15px]">{item.id}</div>
                            <div className="bg-[#b0b0b0] w-[60px] h-[60px] rounded-full"></div>
                            <h2 className="text-white text-[23px] font-sfpromedium">{item.name}</h2>
                        </div>
                        <div className="flex flex-row gap-2">
                            <h2 className="text-white text-[23px] font-sfpromedium">{item.value}</h2>
                            {/*<img className="w-[35px] h-[35px]" src={coin} alt="coin"/>*/}
                            <Coin className={"w-[35px] h-[35px]"}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clasificaciom