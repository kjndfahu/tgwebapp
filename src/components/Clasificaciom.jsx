import {Clock} from "./Icons";
import {ChevronRight} from "lucide-react";
import coin from "../assets/coin1.svg";
import {Coin} from "./Coin";
import {useEffect, useState} from "react";

function Clasificaciom() {
    const [topPlayers, setTopPlayers] = useState([]); // Данные топ-10 игроков
    const [userPosition, setUserPosition] = useState(null); // Позиция пользователя
    const [telegramId, setTelegramId] = useState(null); // ID пользователя Telegram

    // Получение данных о топ-игроках и позиции пользователя
    const fetchTopPlayers = async () => {
        if (!telegramId) {
            console.error('telegram_id отсутствует');
            return; // Если нет Telegram ID, не отправляем запрос
        }

        try {
            const response = await fetch('https://khabyminero.com/top', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    telegram_id: telegramId, // Передаем telegram_id
                }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Полученные данные:', result);
                setTopPlayers(result.result.top_10); // Сохраняем топ-10 игроков
                setUserPosition(result.result.user_position); // Сохраняем позицию пользователя
            } else {
                console.error('Ошибка при получении данных с бэкенда:', response.status);
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    // Получаем telegram_id пользователя при монтировании компонента
    useEffect(() => {
        const tg = window.Telegram.WebApp; // Получаем доступ к Telegram WebApp API
        tg.ready(); // Устанавливаем готовность Telegram WebApp

        const userData = tg.initDataUnsafe?.user?.id || null; // Проверяем данные о пользователе
        if (userData) {
            console.log('Telegram ID пользователя:', userData); // Логируем telegram_id
            setTelegramId(userData); // Устанавливаем Telegram ID
            fetchTopPlayers(); // Загружаем данные о топ-игроках
        } else {
            console.error('Не удалось получить данные пользователя из Telegram');
        }
    }, [telegramId]); // Добавляем telegramId как зависимость для обновления

    return (
        <div className="flex flex-col items-center bg-[url('https://i.imgur.com/IDlQwiO.png')] w-[100vw] mb-[85px]">
            <div className="flex flex-col mt-6 gap-3">
                <h2 className="font-sfprosemibold text-left text-white text-[27px]">Clasificaciom</h2>

                {/* Отображаем позицию пользователя */}
                {userPosition ? (
                    <div className="flex items-center px-5 py-3 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex text-white p-1 bg-[#353535] rounded-[5px] text-[12px]">{userPosition.place}</div>
                            <div className="bg-[#b0b0b0] w-[40px] h-[40px] rounded-full"></div>
                            <h2 className="text-white text-[18px] font-sfpromedium">{userPosition.first_name}</h2>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <h2 className="text-white text-[17px] font-sfpromedium">{userPosition.balance}</h2>
                            <Coin className={"w-[25px] h-[25px]"} />
                        </div>
                    </div>
                ) : (
                    <p className="text-white">Загрузка позиции пользователя...</p>
                )}
            </div>

            <div className="flex flex-col mt-7 mb-[50px] gap-3">
                <h2 className="font-sfprosemibold text-left text-white text-[27px]">Jugadores top</h2>

                {/* Отображаем топ-10 игроков */}
                {topPlayers.length > 0 ? (
                    topPlayers.map((item) => (
                        <div key={item.place} className="flex items-center px-5 py-3 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                            <div className="flex flex-row items-center gap-2">
                                <div className={`flex text-white py-1 px-3 rounded-[5px] text-[12px]`}>{item.place}</div>
                                <div className="bg-[#b0b0b0] w-[40px] h-[40px] rounded-full"></div>
                                <h2 className="text-white text-[18px] font-sfpromedium">{item.first_name}</h2>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <h2 className="text-white text-[17px] font-sfpromedium">{item.balance}</h2>
                                <Coin className={"w-[25px] h-[25px]"} />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-white">Загрузка топ-игроков...</p>
                )}
            </div>

            <div className="mt-5" />
        </div>
    );
}

export default Clasificaciom