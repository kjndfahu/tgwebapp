import {Light, Rocket} from "./Icons";
import {ChevronRight} from "lucide-react";
import {useEffect, useState} from "react";
import axios from "axios";
import axiosWithCache from '../utils/axiosWithCache';

function ProgressBar({isActive, setActive, setActiveModals, energy, setEnergy}) {
    const [energyMax, setEnergyMax] = useState(0);
    const [telegramId, setTelegramId] = useState(null); // ID пользователя Telegram
    const tg = window.Telegram.WebApp;
    const userData = tg.initDataUnsafe?.user?.id;

    const fetchTopPlayers = async () => {
        if (!userData) {
            alert('telegram_id отсутствует');
            return;
        }

        try {
            /*const response = await axios.post('https://khabyminero.com/get_info', {
                telegram_id: userData,
            });*/
            const response = await axiosWithCache('post', 'https://khabyminero.com/get_info', {
                telegram_id: userData
            });

            const result = response.data;
            setEnergy(result.info.energy);
            setEnergyMax(result.info.energy_max);
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        if (userData) {
            setTelegramId(userData);
            fetchTopPlayers();
        } else {
            console.log('Не удалось получить данные пользователя из Telegram');
        }
    }, []);

    return (
        <div>
            <div className="flex flex-row items-center justify-between text-white font-sfpromedium w-[90vw] h-[30px]">
                <div className="flex flex-row items-center text-[13px] gap-1 select-none">
                    <Light className={"w-[20px] h-[20px]"} />
                    {energy}/{energyMax}
                </div>
                <div
                    onClick={() => { setActive(true); setActiveModals(true); }}
                    className="flex flex-row items-center cursor-pointer text-[13px] gap-1 select-none"
                >
                    <Rocket className={"w-[18px] h-[18px]"} />
                    Aumentar
                    <ChevronRight width={15} height={15} color="#ffffff" />
                </div>
            </div>

            {/* Прогресс-бар */}
            <div className="w-full bg-gray-600  rounded-full h-[8px] mt-2">
                <div
                    className="bg-gray-300 h-full rounded-full transition-all duration-300"
                    style={{ width: `${(energy / energyMax) * 100}%` }}
                ></div>
            </div>
        </div>
    );
};


export default ProgressBar;