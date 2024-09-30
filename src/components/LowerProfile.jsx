import Energia from "./Energia";
import StatisticEnergia from "./StatisticEnergia";
import {Clock, Finger} from "./Icons";
import {useEffect, useState} from "react";
import axios from "axios";

function LowerProfile() {
    const [tocar, setTocar] = useState(0)
    const [telegramId, setTelegramId] = useState(null);
    const tg = window.Telegram.WebApp;
    const userData = tg.initDataUnsafe?.user?.id


    // Получение данных о топ-игроках и позиции пользователя
    const fetchTopPlayers = async () => {
        if (!userData) {
            alert('telegram_id отсутствует');
            return;
        }

        try {
            const response = await axios.post('https://khabyminero.com/top', {
                telegram_id: userData
            });

            const result = response.data;
            setTocar(result.info.modifies.toques_lvl)
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
        <div className="flex flex-col ml-5 mt-5 mb-10">
            <h2 className="text-white text-left font-sfprosemibold text-[22px]">Estadisticas</h2>
            <StatisticEnergia/>
            <div className="flex flex-row gap-2 w-[90vw] mt-2">
                <div className="flex items-center px-5 py-3 bg-[#212121] gap-2 rounded-[12px] h-[60px] w-[45vw]">
                    <Finger className={"w-[20px] h-[20px]"}/>
                    <div className="flex flex-col text-left">
                        <h2 className="font-sfpromedium text-white text-[16px] leading-[17px]">Toques</h2>
                        <p className="font-sfpromedium text-[#b0b0b0] text-[12px]"><span
                            className="font-sfprobold text-[14px] text-white">{tocar}</span> / tocar</p>
                    </div>
                </div>
                <div className="flex items-center px-5 py-3 bg-[#212121] rounded-[17px] gap-2 h-[60px] w-[45vw]">
                    <Clock className={"w-[20px] h-[20px]"}/>
                    <div className="flex flex-col text-left">
                        <h2 className="font-sfpromedium text-white text-[16px] leading-[17px]">Pasivo</h2>
                        <p className="font-sfpromedium text-[#b0b0b0] text-[12px]"><span
                            className="font-sfprobold text-[14px] text-white">60</span> / hora</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LowerProfile;