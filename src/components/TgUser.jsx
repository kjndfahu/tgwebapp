import {useEffect, useState} from "react";
import axios from "axios";

function TgUser() {
    const [nick, setNick] = useState('')
    const [photo, setPhoto] = useState(0)
    const [data, setData] = useState('')
    const [telegramId, setTelegramId] = useState(null); // ID пользователя Telegram
    const tg = window.Telegram.WebApp;
    const userData = tg.initDataUnsafe?.user?.id;
    console.log(photo)




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
            setPhoto(result.info.avatar_url)
        } catch (error) {
            alert(error);
        }
    };

    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        // Пример получения байтовых данных изображения с API
        const fetchImage = async () => {
            try {
                const response = await axios.get('https://khabyminero.com/get_info', {
                    responseType: 'arraybuffer', // Важный параметр для получения бинарных данных
                });


                const blob = new Blob([response.data.info.avatar_url], { type: 'image/jpeg' }); // Укажите правильный тип (jpeg, png и т.д.)

                // Преобразование Blob в URL
                const imageUrl = URL.createObjectURL(blob);

                // Установка URL в состояние
                setImageSrc(imageUrl);
            } catch (error) {
                console.error('Ошибка при получении изображения:', error);
            }
        };

        fetchImage();

    }, []);

    useEffect(() => {
        if (userData) {
            setTelegramId(userData);
            fetchTopPlayers();
        } else {
            console.log('Не удалось получить данные пользователя из Telegram');
        }
    }, []);

    return (
        <div className="flex flex-row gap-3 items-center ml-5 mt-4">
            <img className="w-[30px] h-[30px] rounded-full" src={imageSrc} alt="logo"/>
            {/*<div className=" w-[30px] h-[30px] rounded-full">{imageSrc}</div>*/}
            <div className="flex flex-col gap-1 text-left">
            <h4 className="text-white text-[15px] font-sfprosemibold leading-[16px]">@{nick}</h4>
                <p className="text-[10px] leading-[12px] text-[#b0b0b0] font-sfpromedium">Tocando desde - {data}</p>
            </div>
        </div>
    )
}

export default TgUser;