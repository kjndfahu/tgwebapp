import {useEffect, useState} from "react";
import axios from "axios";

function TgUser() {
    const [nick, setNick] = useState('')
    const [data, setData] = useState('')
    const [telegramId, setTelegramId] = useState(null); // ID пользователя Telegram
    const tg = window.Telegram.WebApp;
    const userData = tg.initDataUnsafe?.user?.id


    // Получение данных о топ-игроках и позиции пользователя
    const fetchTopPlayers = async () => {
        if (!userData) {
            alert('telegram_id отсутствует');
            return;
        }

        try {
            const response = await axios.post('https://khabyminero.com/get_info', {
                telegram_id: userData
            });

            const result = response.data;
            setNick(result.info.first_name)
            setData(result.info.joined_at)
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        if (userData) {
            setTelegramId(userData);
            fetchTopPlayers();
        } else {
            alert('Не удалось получить данные пользователя из Telegram');
        }
    }, []);

    return (
        <div className="flex flex-row gap-3 items-center ml-5 mt-4">
            <div className="bg-[#b0b0b0] w-[30px] h-[30px] rounded-full"/>
            <div className="flex flex-col gap-1 text-left">
                <h4 className="text-white text-[15px] font-sfprosemibold leading-[16px]">@{nick}</h4>
                <p className="text-[10px] leading-[12px] text-[#b0b0b0] font-sfpromedium">Tocando desde - {data}</p>
            </div>
        </div>
    )
}

export default TgUser;