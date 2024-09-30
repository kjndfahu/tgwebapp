import {Clock} from "./Icons";
import {ChevronRight} from "lucide-react";
import coin from "../assets/coin1.svg";
import {Coin} from "./Coin";
import {useEffect, useState} from "react";

function Clasificaciom() {
    const [data, setData] = useState([]); // Состояние для хранения списка игроков
    const [telegramId, setTelegramId] = useState(null); // Состояние для хранения ID Telegram пользователя

    // Функция для получения списка лучших игроков с бэкенда
    const fetchTopPlayers = async () => {
        if (!telegramId) return; // Не отправляем запрос, если нет telegramId

        try {
            const response = await fetch('https://khabyminero.com/top', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    telegram_id: telegramId, // Передача идентификатора пользователя
                }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Лучшие игроки:', result);
                setData(result); // Установите полученные данные в состояние
            } else {
                console.error('Ошибка при получении данных с бэкенда');
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    // Получение данных о пользователе при монтировании компонента
    useEffect(() => {
        const tg = window.Telegram.WebApp; // Получение доступа к Telegram Web App API
        tg.ready();
        const userData = tg.initDataUnsafe?.user || null;
        setTelegramId(userData?.id); // Сохраняем ID пользователя Telegram

        if (userData) {
            fetchTopPlayers(); // Загружаем информацию о лучших игроках
        }
    }, []);

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
                        <Coin className={"w-[25px] h-[25px]"} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-7 mb-[50px] gap-3">
                <h2 className="font-sfprosemibold text-left text-white text-[27px]">Jugadores top</h2>
                {data.map((item) => (
                    <div key={item.id} className="flex items-center px-5 py-3 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                        <div className="flex flex-row items-center gap-2">
                            <div className={`flex text-white py-1 px-3 rounded-[5px] text-[12px] ${item.rankColor}`}>{item.id}</div>
                            <div className="bg-[#b0b0b0] w-[40px] h-[40px] rounded-full"></div>
                            <h2 className="text-white text-[18px] font-sfpromedium">{item.name}</h2>
                        </div>
                        <div className="flex flex-row gap-2">
                            <h2 className="text-white text-[17px] font-sfpromedium">{item.value}</h2>
                            <Coin className={"w-[25px] h-[25px]"} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-5" />
        </div>
    )
}

export default Clasificaciom