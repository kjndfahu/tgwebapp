import coin from "../assets/coin.png";
import {ArrowLeftRight, ArrowUp} from "lucide-react";
import {Coin} from "./Coin";
import {useEffect, useState} from "react";
import axios from "axios";
import axiosWithCache from '../utils/axiosWithCache';


function Convertation() {
    const [money, setMoney] = useState(0)
    const [convert, setConvert] = useState(0)
    const [telegramId, setTelegramId] = useState(null); // ID пользователя Telegram
    const tg = window.Telegram.WebApp;
    const userData = tg.initDataUnsafe?.user?.id;


    const fetchTopPlayers = async () => {
        if (!userData) {
            alert('telegram_id отсутствует');
            return;
        }

        try {
            /*const response = await axios.post('https://khabyminero.com/get_info', {
                telegram_id: userData
            });*/
            const response = await axiosWithCache('post', 'https://khabyminero.com/get_info', {
                telegram_id: userData
            });

            const result = response.data;
            setMoney(result.info.balance)
            setConvert(result.info.converted_balance)
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
        <div className="flex flex-col mt-5 items-center">
            <div className="flex flex-col items-center gap-2">
                <h2 className="font-sfprosemibold text-[19px] text-white">Saldos de monedas</h2>
                <div className="flex flex-row items-center gap-2">
                    <h1 className="font-sfprosemibold text-[32px] leading-[35px] text-white">{money}</h1>
                    {/*<img className="w-[45px] h-[45px]" src={coin} alt="coin"/>*/}
                    <Coin className={"w-[30px] h-[30px]"}/>
                </div>
                <p className="text-[#b0b0b0] font-sfpromedium text-[12px]">≈ {convert} EUR</p>
            </div>
        </div>
    )
}

//2890FF

export default Convertation