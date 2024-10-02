import coin from '../assets/coin1.svg'
import {AnimatePresence, motion} from 'framer-motion'
import {Coin} from "./Coin";
import {useEffect, useState} from "react";
import axios from "axios";

function CounterTitul({energy, setEnergy}) {
    const [allClick, setAllClick] = useState(0);
    const [level, setLevel] = useState(1);
    const [telegramId, setTelegramId] = useState(null);
    const [floatingCoins, setFloatingCoins] = useState([]); // Состояние для плавающих монеток
    const tg = window.Telegram.WebApp;
    const userData = tg.initDataUnsafe?.user?.id;

    // Функция для получения информации о пользователе
    const fetchUserInfo = async () => {
        try {
            const response = await axios.post('https://khabyminero.com/get_info', {
                telegram_id: userData,
            });

            if (response.data.ok) {
                setAllClick(response.data.info.balance);
                setLevel(response.data.info.modifies.toques_lvl);
            } else {
                console.error('Ошибка при получении данных о пользователе');
            }
        } catch (error) {
            console.error('Ошибка при запросе на сервер:', error);
        }
    };

    // Функция для кликов и отправки данных на сервер
    const handleClick = async () => {
        try {
            const response = await axios.post('https://khabyminero.com/clicker', {
                telegram_id: telegramId,
                click_count: 1,
            });

            if (response.data.ok) {
                setAllClick((prev) => prev + level);
                showFloatingCoin(level); // Показать плавающую монетку
            } else {
                console.error('Ошибка при обновлении количества кликов');
            }
        } catch (error) {
            console.error('Ошибка при отправке клика на сервер:', error);
        }
    };

    // Функция для отображения плавающей монетки
    const showFloatingCoin = (amount) => {
        const id = Date.now();
        const x = Math.random() * 100;
        const y = Math.random() * 20;

        setFloatingCoins((prev) => [
            ...prev,
            { id, amount, x, y },
        ]);

        // Удалить монетку через 0.5 секунды
        setTimeout(() => {
            setFloatingCoins((prev) => prev.filter((coin) => coin.id !== id));
        }, 500);
    };

    const decreaseEnergy = () => {
        if (energy > 0) {
            setEnergy((prevEnergy) => prevEnergy - 1);
        } else {
            console.log('Энергия не может быть меньше 0');
        }
    };

    const handleTouchStart = (e) => {
        e.preventDefault();
        if (e.touches.length >= 1) {
            handleClick();
            decreaseEnergy();
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
        <div className="relative flex flex-col items-center justify-between gap-7">
            <h1 className="text-white font-sfprosemibold text-[48px]">{allClick}</h1>
            <motion.div
                whileTap={{ scale: 0.9 }}
                onTouchStart={handleTouchStart}
                onClick={() => {
                    handleClick();
                    decreaseEnergy();
                }}
                className="relative"
            >
                <Coin className="w-[70vw] h-[40vh]" />
                {/* Анимации плавающих монет */}
                <AnimatePresence>
                    {floatingCoins.map((coin) => (
                        <motion.div
                            key={coin.id}
                            initial={{ opacity: 1, y: 0 }}
                            animate={{ opacity: 0, y: -50 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: 'absolute',
                                left: `${coin.x}%`,
                                top: `${coin.y}%`,
                                pointerEvents: 'none',
                                color: 'white',
                                borderRadius: '2px',
                                borderColor: 'black',
                                fontSize: '28px',
                                fontWeight: 'bold',
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            +{coin.amount}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default CounterTitul;