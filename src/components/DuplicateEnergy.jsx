import {ChevronRight, Link2, X} from "lucide-react";
import {Explosion, Light} from "./Icons";
import {motion} from 'framer-motion'
import axios from "axios";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";

function DuplicateEnergy({setActiveDuplicate, setActiveModals}) {
    const [energyMax, setEnergyMax] = useState(0);
    const [telegramId, setTelegramId] = useState(null); // ID пользователя Telegram
    const tg = window.Telegram.WebApp;
    const userData = 7366050080

    const checkSubscription = async () => {
        if (!userData) {
            alert('telegram_id отсутствует');
            return;
        }

        try {
            const response = await axios.post('https://khabyminero.com/check_subscription', {
                telegram_id: userData,
            });

            const result = response.data;
            if (result.is_subscribed) {
                alert('Вы подписаны на канал');
            } else {
                toast('Вы не подписаны на канал');
            }
        } catch (error) {
            alert('Ошибка при проверке подписки');
        }
    };
    const fetchTopPlayers = async () => {
        if (!userData) {
            alert('telegram_id отсутствует');
            return;
        }

        try {
            const response = await axios.post('https://khabyminero.com/get_info', {
                telegram_id: userData,
            });

            const result = response.data;
            setEnergyMax(result.info.energy_max);
        } catch (error) {
            alert(error);
        }
    };



    const subscribeToChannel = () => {
        window.open('https://t.me/+raicE6M7Lj85ZWZi', '_blank'); // Переход на канал
    };

    useEffect(() => {
        if (userData) {
            setTelegramId(userData);
            fetchTopPlayers();
        } else {
            console.log('Не удалось получить данные пользователя из Telegram');
        }
    }, [energyMax]);

    return (
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ ease: 'easeInOut' }}
            className="flex absolute left-0 gap-7 z-100 bottom-0 flex-col py-3 px-5 bg-[#212121] rounded-t-[20px] w-[100vw] h-[75vh]"
        >
            <div className="flex flex-row justify-between">
                <div className="w-[10px]"></div>
                <div className="flex flex-row bg-[#383838] p-1 rounded-full">
                    <X onClick={() => { setActiveDuplicate(false); setActiveModals(false); }} width={18} height={18} color="#b0b0b0" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="bg-[#383838] w-[90px] h-[90px] rounded-[20px]" />
                <h2 className="text-white font-sfprosemibold text-[24px]">Rio del dinero</h2>
                <p className="text-[#b0b0b0] font-sfpromedium text-[14px] leading-[15px]">Subscribete y obten una<br />
                    recompensa por tu suscripcion</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
                <div
                    className="flex flex-row bg-[#383838] rounded-[7px] gap-1 py-1 px-4 text-white text-[15px] font-sfpromedium">
                    <Light className={"w-[20px] h-[20px]"} />
                    <h4>{energyMax}</h4>
                </div>
                <ChevronRight width={20} height={20} color="#ffffff" />
                <div
                    className="flex flex-row bg-[#383838] rounded-[7px] gap-1 py-1 px-4 text-white text-[15px] font-sfpromedium">
                    <Light className={"w-[20px] h-[20px]"} />
                    <h4>{energyMax*2}</h4>
                </div>
            </div>
            <div className="flex flex-row gap-3">
                <div
                    onClick={subscribeToChannel} // Обработчик для подписки
                    className="flex flex-row rounded-[12px] py-3 items-center justify-center gap-2 w-[43vw] bg-[#2890FF] text-[15px] font-sfpromedium text-white"
                >
                    <h2>Suscribirse</h2>
                </div>
                <div
                    onClick={checkSubscription} // Обработчик для проверки подписки
                    className="flex flex-row rounded-[12px] py-3 items-center justify-center gap-2 w-[43vw] bg-[#18212A] text-[15px] font-sfpromedium text-[#2890FF]"
                >
                    <h2>Verificaciom</h2>
                </div>
            </div>
        </motion.div>
    );
};

export default DuplicateEnergy