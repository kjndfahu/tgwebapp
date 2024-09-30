import {Clock} from "./Icons";
import {ChevronRight} from "lucide-react";
import coin from "../assets/coin1.svg";
import {Coin} from "./Coin";
import {useEffect, useState} from "react";

function Clasificaciom() {
    const datadt = [
        {
            id: 1,
            rankColor: 'bg-[#e2c317]',
            name: "Henry",
            value: "17M"
        },
        {
            id: 2,
            rankColor: 'bg-[#b9bab8]',
            name: "Jegr",
            value: "13M"
        },
        {
            id: 3,
            rankColor: 'bg-[#e89417]',
            name: "Kevin",
            value: "12M"
        },
        {
            id: 4,
            rankColor: 'bg-[#353535]',
            name: "Henry",
            value: "11.4M"
        },
        {
            id: 5,
            rankColor: 'bg-[#353535]',
            name: "Henry",
            value: "10.8M"
        },
        {
            id: 6,
            rankColor: 'bg-[#353535]',
            name: "Henry",
            value: "10M"
        },
        {
            id: 7,
            rankColor: 'bg-[#353535]',
            name: "Henry",
            value: "9.6M"
        },
        {
            id: 8,
            rankColor: 'bg-[#353535]',
            name: "Henry",
            value: "9.2M"
        },
        {
            id: 9,
            rankColor: 'bg-[#353535]',
            name: "Henry",
            value: "8.9M"
        },
        {
            id: 10,
            rankColor: 'bg-[#353535]',
            name: "Henry",
            value: "7.2M"
        },


    ]
    const [data, setData] = useState([]);
    const [telegramData, setTelegramData] = useState(null);

    useEffect(() => {
        const tg = window.Telegram.WebApp;
        tg.ready();
        const userData = tg.initDataUnsafe?.user || null;
        setTelegramData(userData);

        if (userData) {
            fetchTopPlayers(userData.id);
        }
    }, []);

    const fetchTopPlayers = async (telegramId) => {
        try {
            const response = await fetch('https://khabyminero.com/top', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ telegram_id: telegramId }),
            });

            if (response.ok) {
                const result = await response.json();
                setData(result); // Предполагается, что бэкенд вернет массив с игроками
            } else {
                console.error('Ошибка при получении данных с бэкенда');
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };
    return (
        <div className="flex flex-col items-center bg-[url('https://i.imgur.com/IDlQwiO.png')] w-[100vw] mb-[85px]">
            <div className="flex flex-col mt-6 gap-3">
                <h2 className="font-sfprosemibold text-left text-white text-[27px]">Clasificaciom</h2>
                <div className="flex items-center px-5 py-3 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                    <div className="flex flex-row items-center gap-2">
                        <div className="flex text-white p-1 bg-[#353535] rounded-[5px] text-[12px]">1k+</div>
                        <div className="bg-[#b0b0b0] w-[40px] h-[40px] rounded-full"></div>
                        <h2 className="text-white text-[18px] font-sfpromedium">bell</h2>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <h2 className="text-white text-[17px] font-sfpromedium">1.3k</h2>
                        {/*<img className="w-[35px] h-[35px]" src={coin} alt="coin"/>*/}
                        <Coin className={"w-[25px] h-[25px]"}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-7 mb-[50px] gap-3">
                <h2 className="font-sfprosemibold text-left text-white text-[27px]">Jugadores top</h2>
                {datadt.map((item) => (
                    <div className="flex items-center px-5 py-3 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                        <div className="flex flex-row items-center gap-2">
                            <div className={`flex text-white py-1 px-3 rounded-[5px] text-[12px] ${item.rankColor}`}>{item.id}</div>
                            <div className="bg-[#b0b0b0] w-[40px] h-[40px] rounded-full"></div>
                            <h2 className="text-white text-[18px] font-sfpromedium">{item.name}</h2>
                        </div>
                        <div className="flex flex-row gap-2">
                            <h2 className="text-white text-[17px] font-sfpromedium">{item.value}</h2>
                            {/*<img className="w-[35px] h-[35px]" src={coin} alt="coin"/>*/}
                            <Coin className={"w-[25px] h-[25px]"}/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-5"/>
        </div>
    )
}

export default Clasificaciom