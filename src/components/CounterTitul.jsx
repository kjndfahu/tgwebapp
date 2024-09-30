import coin from '../assets/coin1.svg'
import {motion} from 'framer-motion'
import {Coin} from "./Coin";
import {useEffect, useState} from "react";

function CounterTitul() {
    const [clickCount, setClickCount] = useState(0); // Инициализация с нулевого значения
    const [telegramData, setTelegramData] = useState(null); // Хранение данных Telegram пользователя

    // Функция для получения текущего значения кликов с бэкенда
    const fetchClickCount = async (telegramId) => {
        try {
            const response = await fetch('https://khabyminero.com/get_info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    telegram_id: telegramId, // Идентификатор пользователя
                }),
            });

            if (response.ok) {
                const result = await response.json();
                if (result && result.balance) {
                    setClickCount(result.balance); // Установить текущее значение кликов из БД
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
                    click_count: newClickCount,    // Количество кликов
                }),
            });

            if (!response.ok) {
                console.error('Ошибка при отправке кликов на бэкенд');
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    // Увеличение кликов на 1 и отправка данных на бэкенд
    const handleClick = () => {
        const newClickCount = clickCount + 1;
        setClickCount(newClickCount); // Локально обновляем клики
        if (telegramData) {
            sendClickData(newClickCount); // Отправляем обновлённое значение на сервер
        }
    };

    // Получение данных пользователя Telegram и текущего значения кликов при монтировании компонента
    useEffect(() => {
        const tg = window.Telegram.WebApp;
        tg.ready();
        const userData = tg.initDataUnsafe?.user || null;
        setTelegramData(userData); // Сохраняем данные пользователя Telegram

        if (userData) {
            fetchClickCount(userData.id);  // Загружаем текущее значение кликов из БД
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