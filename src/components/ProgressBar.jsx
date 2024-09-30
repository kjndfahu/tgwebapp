import {Light, Rocket} from "./Icons";
import {ChevronRight} from "lucide-react";
import {useEffect, useState} from "react";
import axios from "axios";

function ProgressBar({isActive, setActive}) {
    const [energy, setEnergy] = useState(0)
    const [energyMax, setEnergyMax] = useState(0)
    const [telegramId, setTelegramId] = useState(null); // ID пользователя Telegram
    const tg = window.Telegram.WebApp;
    const userData = tg.initDataUnsafe?.user?.id


    // Получение данных о топ-игроках и позиции пользователя
    const fetchTopPlayers = async () => {
        if (!userData) {
            alert('telegram_id отсутствует');
            return;
        }

        try {
            const response = await axios.post('https://khabyminero.com/get_info', {
                telegram_id: userData
            });

            const result = response.data;
            setEnergy(result.info.energy)
            setEnergyMax(result.info.energy_max)
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        if (userData) {
            setTelegramId(userData);
            fetchTopPlayers();
        } else {
            alert('Не удалось получить данные пользователя из Telegram');
        }
    }, []);
    return (
        <div >
            <div className="flex flex-row items-center justify-between text-white font-sfpromedium w-[90vw] h-[30px]">
                <div className="flex flex-row items-center text-[13px] gap-1">
                    <Light className={"w-[20px] h-[20px]"}/>
                    {energy}/{energyMax}
                </div>
                <div onClick={() => setActive(true)} className="flex flex-row items-center text-[13px] gap-1">
                    <Rocket className={"w-[18px] h-[18px]"}/>
                    Aumentar
                    <ChevronRight width={15} height={15} color="#ffffff"/>
                </div>
            </div>
            <div className="w-full bg-white rounded-full h-[8px]"></div>
        </div>
    )
}

export default ProgressBar;