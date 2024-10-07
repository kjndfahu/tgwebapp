import { useEffect, useState, useCallback } from "react";
import axiosWithCache from '../utils/axiosWithCache';

function TgUser() {
    const [nick, setNick] = useState('');
    const [photo, setPhoto] = useState('');
    const [data, setData] = useState('');
    const tg = window.Telegram.WebApp;
    const userData = tg.initDataUnsafe?.user?.id;

    const fetchUserData = useCallback(async () => {
        if (!userData) {
            alert('telegram_id отсутствует');
            return;
        }

        try {
            const response = await axiosWithCache('post', 'https://khabyminero.com/get_info', {
                telegram_id: userData
            });

            const { info } = response.data;
            setNick(info.first_name || '');
            setData(info.joined_at || '');
            setPhoto(info.avatar_url || '');
        } catch (error) {
            alert(error);
        }
    }, [userData]);

    useEffect(() => {
        if (userData) {
            fetchUserData();
        } else {
            console.log('Не удалось получить данные пользователя из Telegram');
        }
    }, [userData, fetchUserData]);

    return (
        <div className="flex flex-row gap-3 items-center ml-5 mt-4">
            {photo ? (
                <img className="w-[30px] h-[30px] rounded-full" src={photo} alt="logo"/>
            ) : (
                <div className="w-[30px] h-[30px] rounded-full bg-gray-300"></div>
            )}
            <div className="flex flex-col gap-1 text-left">
                <h4 className="text-white text-[15px] font-sfprosemibold leading-[16px]">@{nick}</h4>
                <p className="text-[10px] leading-[12px] text-[#b0b0b0] font-sfpromedium">
                    Tocando desde - {data}
                </p>
            </div>
        </div>
    );
}

export default TgUser;
