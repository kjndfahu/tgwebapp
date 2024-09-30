import coin from '../assets/coin1.svg'
import {motion} from 'framer-motion'
import {Coin} from "./Coin";
import {useEffect, useState} from "react";

function CounterTitul() {
    const [clickCount, setClickCount] = useState(0); // Начальное значение 0
    const [telegramData, setTelegramData] = useState(null);

    const fetchClickCount = async (telegramId) => {
        try {
            const response = await fetch('https://khabyminero.com/get_info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    telegram_id: telegramId,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                if (result && result.click_count) {
                    setClickCount(result.click_count); // Инициализируем значение кликов с бэкенда
                }
            } else {
                console.error('Ошибка при получении данных с бэкенда');
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    // Функция для отправки данных о клике на бэкенд
    const sendClickData = async (newClickCount) => {
        try {
            const response = await fetch('https://khabyminero.com/clicker', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    telegram_id: telegramData.id,  // ID пользователя из Telegram
                    click_count: newClickCount,
                }),
            });

            if (!response.ok) {
                console.error('Ошибка при отправке кликов на бэкенд');
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    // Увеличиваем счетчик кликов и отправляем на бэкенд
    const handleClick = () => {
        const newClickCount = clickCount + 1;
        setClickCount(newClickCount); // Локальное обновление

        if (telegramData) {
            sendClickData(newClickCount); // Отправляем новое значение на бэкенд для сохранения в базе данных
        }
    };

    // Получение данных пользователя Telegram и текущего значения кликов при монтировании компонента
    useEffect(() => {
        const tg = window.Telegram.WebApp;
        tg.ready();
        const userData = tg.initDataUnsafe?.user || null;
        setTelegramData(userData);

        if (userData) {
            fetchClickCount(userData.id);  // Загружаем текущее значение кликов
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-between gap-7">
            <h1 className="text-white font-sfprosemibold text-[48px]">{clickCount}</h1>
            <motion.div  whileTap={{scale: 0.9}} onClick={handleClick}>
                <Coin className={"w-[70vw] h-[40vh]"}/>
            </motion.div>
        </div>
    )
}

export default CounterTitul;