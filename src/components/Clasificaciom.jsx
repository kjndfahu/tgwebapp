import {Coin} from "./Coin";
import {useEffect, useState} from "react";
import axios from "axios";

function Clasificaciom({setIsScrollEnabled}) {
    const [topPlayers, setTopPlayers] = useState([]);
    const [userPosition, setUserPosition] = useState(0);
    const [telegramId, setTelegramId] = useState(null);
    const [loading, setLoading] = useState(true);
    const tg = window.Telegram.WebApp;
    tg.disableVerticalSwipes();
    const userData = tg.initDataUnsafe?.user?.id;


    const fetchTopPlayers = async () => {
        if (!userData) {
            alert('telegram_id отсутствует');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('https://khabyminero.com/top', {
                telegram_id: userData,
            });

            const result = response.data;
            setTopPlayers(result.result.top_10);
            setUserPosition(result.result.user_position);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userData) {
            setTelegramId(userData);
            setIsScrollEnabled(true);
            fetchTopPlayers();
        } else {
            alert('Не удалось получить данные пользователя из Telegram');
            setLoading(false);
        }
    }, [userData, setIsScrollEnabled]);

    const getPlaceColor = (place) => {
        switch (place) {
            case 1:
                return 'bg-[#FFD700]';
            case 2:
                return 'bg-[#C0C0C0]';
            case 3:
                return 'bg-[#CD7F32]';
            default:
                return 'bg-[#353535]';
        }
    };

    return (
        <div className="flex flex-col items-center bg-[url('https://i.imgur.com/IDlQwiO.png')] w-full h-[100%]">
            <div className="flex flex-col mt-6 gap-3">
                <h2 className="font-sfprosemibold text-left text-white text-[27px]">Clasificaciom</h2>

                {loading ? (
                    <div className="text-white text-[20px]">Loading...</div>
                ) : (
                    <div className="flex items-center px-5 py-3 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                        <div className="flex flex-row items-center gap-2">
                            <div className={`flex text-white py-1 px-3 rounded-[5px] text-[15px] ${getPlaceColor(userPosition.place)}`}>
                                {userPosition.place}
                            </div>
                            <div className="bg-[#b0b0b0] w-[40px] h-[40px] rounded-full"></div>
                            <h2 className="text-white text-[18px] font-sfpromedium">{userPosition.first_name}</h2>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <h2 className="text-white text-[17px] font-sfpromedium">{userPosition.balance}</h2>
                            <Coin className={"w-[25px] h-[25px]"} />
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-col mt-7 mb-[50px] gap-3">
                <h2 className="font-sfprosemibold text-left text-white text-[27px]">Jugadores top</h2>

                {loading ? (
                    <div className="text-white text-[20px]">Loading...</div>
                ) : (
                    topPlayers.map((item) => (
                        <div key={item.place} className="flex items-center px-5 py-3 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                            <div className="flex flex-row items-center gap-2">
                                <div className={`flex text-white py-1 px-3 rounded-[5px] ${getPlaceColor(item.place)}`}>
                                    {item.place}
                                </div>
                                <div className="bg-[#b0b0b0] w-[40px] h-[40px] rounded-full"></div>
                                <h2 className="text-white text-[18px] font-sfpromedium">{item.first_name}</h2>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <h2 className="text-white text-[17px] font-sfpromedium">{item.balance}</h2>
                                <Coin className={"w-[25px] h-[25px]"} />
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="mt-5" />
        </div>
    );

}

export default Clasificaciom