import coin from '../assets/coin1.svg'
import {motion} from 'framer-motion'
import {Coin} from "./Coin";
import {useEffect, useState} from "react";
import axios from "axios";

function CounterTitul({energy, setEnergy}) {
    const [allClick, setAllClick] = useState(0)
    const [telegramId, setTelegramId] = useState(null);
    const tg = window.Telegram.WebApp;
    const userData = 1183781734


    const fetchUserInfo = async () => {
        try {
            const response = await axios.post('https://khabyminero.com/get_info', {
                telegram_id: userData,
            });


            if (response.data.ok) {
                setAllClick(response.data.info.balance);
            } else {
                console.error('Ошибка при получении данных о пользователе');
            }
        } catch (error) {
            console.error('Ошибка при запросе на сервер:', error);
        }
    };


    const handleClick = async () => {
        try {
            const updatedClickCount = allClick + 1;

            const response = await axios.post('https://khabyminero.com/clicker', {
                telegram_id: telegramId,
                click_count: 1,
            });


            if (response.data.ok) {
                setAllClick((prev) => prev += 1)
            } else {
                console.error('Ошибка при обновлении количества кликов');
            }
        } catch (error) {
            console.error('Ошибка при отправке клика на сервер:', error);
        }
    };

    const decreaseEnergy = () => {
        if (energy > 0) {
            setEnergy((prevEnergy) => prevEnergy - 1);
            console.log(1)
        } else {
            alert('Энергия не может быть меньше 0');
        }
    };


    useEffect(() => {
        if (userData) {
            setTelegramId(userData);
            fetchUserInfo();
        } else {
            console.error('Не удалось получить данные пользователя из Telegram');
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-between gap-7">
            <h1 className="text-white font-sfprosemibold text-[48px]">{allClick}</h1>
            <motion.div whileTap={{ scale: 0.9 }} onClick={() => {
                handleClick()
                decreaseEnergy()}}>
                <Coin className={"w-[70vw] h-[40vh]"} />
            </motion.div>
        </div>
    );
}

export default CounterTitul;