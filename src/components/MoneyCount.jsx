import coin from "../assets/coin1.svg";
import {Coin} from "./Coin";
import {useEffect, useState} from "react";
import axios from "axios";
import axiosWithCache from '../utils/axiosWithCache';


function MoneyCount() {
    const [allMoney, setAllMoney] = useState(0)
    const [telegramId, setTelegramId] = useState(null); // ID пользователя Telegram
    const tg = window.Telegram.WebApp;
    const userData = tg.initDataUnsafe?.user?.id;


    // Получение данных о топ-игроках и позиции пользователя
    const fetchTopPlayers = async () => {
        if (!userData) {
            alert('telegram_id отсутствует');
            return;
        }

        try {
           /* const response = await axios.post('https://khabyminero.com/get_info', {
                telegram_id: userData
            });*/
            const response = await axiosWithCache('post', 'https://khabyminero.com/get_info', {
                telegram_id: userData
            });

            const result = response.data;
            setAllMoney(result.info.balance)
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        if (userData) {
            setTelegramId(userData);
            fetchTopPlayers();
        } else {
            console.log('Не удалось получить данные пользователя из Telegram');
        }
    }, []);
    return (
        <div className="flex items-center flex-col gap-2 mt-5" >
            <h4 className="text-[#b0b0b0] text-[19px] font-sfpromedium">Tu saldo</h4>
            <div className="flex flex-row items-center bg-[#b0b0b0] rounded-full text-white text-[22px] py-1 px-4 font-sfpromedium">
                {/*<img className="w-[40px]" src={coin} alt="coin"/>*/}
                <Coin className={"w-[25px] h-[25px]"}/>
                {allMoney}
            </div>
        </div>
    )
}

export default MoneyCount