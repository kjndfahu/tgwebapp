import coin from '../assets/coin1.svg'
import {motion} from 'framer-motion'
import {Coin} from "./Coin";
import {useEffect, useState} from "react";
import axios from "axios";

function CounterTitul() {
    const [allClick, setAllClick] = useState(0)
    const [telegramId, setTelegramId] = useState(null);
    const tg = window.Telegram.WebApp;
    const userData = 7366050080


    const fetchUserInfo = async () => {
        try {
            const response = await axios.post('https://khabyminero.com/get_info', {
                telegram_id: userData,
            });

            if (response.data.ok) {
                setAllClick(response.data.result.info.balance);
            } else {
                console.error('Ошибка при получении данных о пользователе');
            }
        } catch (error) {
            console.error('Ошибка при запросе на сервер:', error);
        }
    };


    const handleClick = async () => {
        try {
            setAllClick((prev) => prev += 1)

            const response = await axios.post('https://khabyminero.com/clicker', {
                telegram_id: telegramId,
                click_count: allClick,
            });

            if (response.data.ok) {
                setAllClick(allClick);
            } else {
                console.error('Ошибка при обновлении количества кликов');
            }
        } catch (error) {
            console.error('Ошибка при отправке клика на сервер:', error);
        }
    };


    useEffect(() => {
        if (userData) {
            setTelegramId(userData);
            fetchUserInfo();
        } else {
            console.error('Не удалось получить данные пользователя из Telegram');
        }
    }, [allClick]);

    return (
        <div className="flex flex-col items-center justify-between gap-7">
            <h1 className="text-white font-sfprosemibold text-[48px]">{allClick}</h1>
            <motion.div whileTap={{ scale: 0.9 }} onClick={handleClick}>
                <Coin className={"w-[70vw] h-[40vh]"} />
            </motion.div>
        </div>
    );
}

export default CounterTitul;