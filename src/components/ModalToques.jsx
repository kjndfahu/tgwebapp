import {ChevronRight, X} from "lucide-react";
import {Clock, Finger} from "./Icons";
import coin from "../assets/coin1.svg";
import {motion} from 'framer-motion'
import axios from "axios";
import {useEffect, useState} from "react";
import toast, {Toaster} from "react-hot-toast";
import {Coin} from "./Coin";

function ModalToques({isActiveToques, setActiveToques, setActiveModals}) {
    const[level, setLevel] = useState(1);
    const[money, setMoney] = useState(0);
    const tg = window.Telegram.WebApp
    const userData = tg.initDataUnsafe?.user?.id;

    const fetchUserInfo = async () => {
        if (!userData) {
            alert('telegram_id отсутствует');
            return;
        }

        try {
            const response = await axios.post('https://khabyminero.com/get_info', {
                telegram_id: userData
            });


            const result = response.data;
            setLevel(result.info.modifies.toques_lvl)
            setMoney(result.info.balance)

        } catch (error) {
            console.error('Ошибка при получении информации о пользователе:', error);
        }
    };

    const calculateCoins = (level) => {
        return Math.floor(1000 * Math.pow(1.5, level - 1));
    };

    const isVisibleButton = (money, level) => {
        if(money <= calculateCoins(level)) {
            return 'bg-[#1d5084]';
        } else {
            return 'bg-[#2890FF]'
        }
    }

    const buyToques = async () => {
        try {
            const response = await axios.post('https://khabyminero.com/buy_toques', {
                telegram_id: userData,
                level: level+1
            });
             console.log(response)
        } catch (error) {
            toast('Fondos insuficientes')
        }
    };


    useEffect(() => {
        fetchUserInfo();
        if (isActiveToques && 'vibrate' in navigator) {
            navigator.vibrate(200); // 200ms vibration
        }
    }, [isActiveToques]);

    const [isVisible, setIsVisible] = useState(true); // Состояние видимости

    const handleClose = () => {
        setIsVisible(false); // Устанавливаем состояние, чтобы скрыть компонент
    };

    return (
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: isVisible ? "0%" : "100%" }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex gap-5 absolute left-0 z-100 bottom-0 flex-col py-3 px-5 bg-[#212121] rounded-t-[20px] w-[100vw] h-[65vh]"
            onAnimationComplete={() => {
                if (!isVisible) {
                    setActiveToques(false)
                    setActiveModals(false);
                }
            }}>
            <div className="flex flex-row justify-between">
                <div className="w-[10px]"></div>
                <div onClick={handleClose} className="flex flex-row bg-[#383838] p-1 rounded-full">
                    <X  width={18} height={18} color="#b0b0b0"/>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex items-center justify-center bg-[#383838] w-[100px] h-[100px] rounded-[20px]">
                    <Finger className="w-[40px]"/>
                </div>
                <h2 className="text-white font-sfprosemibold text-[24px] leading-[26px]">Toques</h2>
                <p className="text-[#b0b0b0] font-sfpromedium text-[14px] leading-[15px]">Major tus clics para ganar
                    mas<br/>
                    monedas con cada toques</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
                <div
                    className="flex flex-row items-center bg-[#383838] rounded-[7px] gap-2 py-1 px-4 text-white text-[15px] font-sfpromedium">
                    <Coin className={"w-[25px] h-[25px]"}/>
                    <h4>{level}</h4>
                    <p className="text-[14px] text-[#b0b0b0] font-sfpromedium">/tocar</p>
                </div>
                <ChevronRight width={25} height={25} color="#ffffff"/>
                <div
                    className="flex flex-row bg-[#383838] rounded-[7px] gap-1 py-1 px-4 text-white text-[15px] font-sfpromedium">
                    <Coin className={"w-[25px] h-[25px]"}/>
                    <h4>{level+1}</h4>
                    <p className="text-[14px] text-[#b0b0b0] font-sfpromedium">/tocar</p>
                </div>
            </div>
            <div
                className="flex flex-row rounded-2xl py-4 items-center justify-center gap-2 w-[90vw] text-[15px] font-sfpromedium text-white">
                <div
                    className="flex flex-row gap-3 items-center justify-center bg-[#383838] rounded-[10px] py-3 w-[25vw]">
                    <h4>{calculateCoins(level)}</h4>
                    <Coin className={"w-[25px] h-[25px]"}/>
                </div>
                <div onClick={buyToques} className={`flex flex-row items-center ${isVisibleButton(money, level)} justify-center bg-[#2890FF] rounded-[10px] py-3 w-[65vw]`}>
                    Hecho
                    <Toaster toastOptions={{
                        className: '',
                        style: {
                            border: '1px solid #713200',
                            padding: '16px',
                            color: '#c5c5c5',
                            background: '#000000'
                        },
                    }}/>
                </div>
            </div>
        </motion.div>
    )
}

export default ModalToques