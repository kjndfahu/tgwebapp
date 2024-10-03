import coin from '../assets/coin1.svg'
import {AnimatePresence, motion} from 'framer-motion'
import {Coin} from "./Coin";
import {useEffect, useRef, useState} from "react";
import axios from "axios";

function CounterTitul({energy, setEnergy}) {
    const [allClick, setAllClick] = useState(0);
    const [level, setLevel] = useState(1);
    const [telegramId, setTelegramId] = useState(null);
    const [clickCount, setClickCount] = useState(0);
    const [floatingCoins, setFloatingCoins] = useState([]);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const tg = window.Telegram.WebApp;
    const userData = tg.initDataUnsafe?.user?.id;
    const clickTimeoutRef = useRef(null); // Use a ref for the timeout

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

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

    const handleClick = () => {
        setClickCount((prev) => prev + level);
        setAllClick((prev) => prev + level);
        showFloatingCoin(level);
        decreaseEnergy();

        // Clear the previous timeout
        if (clickTimeoutRef.current) {
            clearTimeout(clickTimeoutRef.current);
        }

        // Set a new timeout to send clicks after 1 second
        clickTimeoutRef.current = setTimeout(() => {
            sendClicksToServer();
        }, 1000); // You can increase this if needed
    };

    const sendClicksToServer = async () => {
        if (clickCount > 0) {
            try {
                const response = await axios.post('https://khabyminero.com/clicker', {
                    telegram_id: telegramId,
                    click_count: clickCount,
                });

                if (response.data.ok) {
                    setClickCount(0);
                } else {
                    console.error('Ошибка при обновлении количества кликов');
                }
            } catch (error) {
                console.error('Ошибка при отправке клика на сервер:', error);
            }
        }
    };

    const showFloatingCoin = (amount) => {
        const id = Date.now();
        const x = Math.random() * 90;
        const y = Math.random() * 20;

        setFloatingCoins((prev) => [
            ...prev,
            { id, amount, x, y },
        ]);

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
        }
    };

    const handleMouseClick = () => {
        handleClick();
    };

    useEffect(() => {
        if (userData) {
            setTelegramId(userData);
            fetchUserInfo();
        } else {
            console.error('Не удалось получить данные пользователя из Telegram');
        }
    }, [userData]);

    return (
        <div className="relative flex flex-col items-center justify-between gap-7">
            <h1 className="text-white font-sfprosemibold text-[48px]">{allClick}</h1>
            <motion.div
                whileTap={{ scale: 0.9 }}
                onTouchStart={isTouchDevice ? handleTouchStart : undefined}
                onClick={isTouchDevice ? undefined : handleMouseClick}
                className="relative"
            >
                <Coin className="w-[70vw] cursor-pointer h-[40vh]" />
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
                                borderColor: 'transparent',
                                fontSize: '48px',
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
}

export default CounterTitul;
