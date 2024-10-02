import ball from '../assets/discoball.gif'
import {Link2} from "lucide-react";
import {Light} from "./Icons";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function ModalRef() {
    const [referrals, setReferrals] = useState(0);
    const [referralCode, setReferralCode] = useState('');
    const tg = window.Telegram.WebApp;
    const navigate = useNavigate();
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
            setReferrals(result.info.referrals || 0);
            setReferralCode(result.info.referral_code || '');
        } catch (error) {
            console.error('Ошибка при получении информации о пользователе:', error);
        }
    };
    const copyReferralLink = () => {
        const referralLink = `https://t.me/Khabycoin_bot?start=${referralCode}`;
        navigator.clipboard.writeText(referralLink).then(() => {
        }).catch(err => {
            console.error('Ошибка при копировании ссылки:', err);
        });
    };

    useEffect(() => {
        tg.BackButton.show();
        tg.BackButton.onClick(() => {
            navigate('/');
            tg.BackButton.hide();
        });

        fetchUserInfo();
    }, []);

    return (
        <div className="flex flex-col bg-black h-[100vh]">
            <div className="px-5 mt-7 text-left">
                <h1 className="text-white font-sfprosemibold text-[28px]">Referencia</h1>
                <h2 className="text-white font-sfprosemibold text-[22px] leading-[24px] mt-4">
                    Aumenta la energia de<br />cada usuario invitado
                </h2>
                <p className="text-white font-sfpromedium text-[13px] mt-4">
                    Invita a un amigo y aumenta tu energia
                </p>
            </div>
            <img className="w-[180px] h-[180px] self-center mt-7" src={ball} alt="" />
            <div className="flex flex-col px-5 mt-5 text-white font-sfpromedium text-[14px]">
                <p>Referir via</p>
                <div className="flex gap-3 justify-between flex-row items-center py-2 px-3 bg-[#212121] rounded-[15px] mt-2">
                    <h2>Enlace</h2>
                    <div onClick={copyReferralLink}
                         className="text-[#2890FF] gap-1 flex flex-row items-center text-[15px] px-4 py-1 rounded-[7px] active:bg-[#15406E]">
                        {`https://t.me/Khabycoin_bot?start=${referralCode}`}
                        <div className="rotate-[-45deg]">
                            <Link2 width={18} height={18} color="#2890FF"/>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-row items-center justify-between py-2 px-3 bg-[#212121] rounded-[15px] mt-2 mb-10">
                    <div className="flex flex-row gap-2 items-center">
                        <h2 className="text-white font-sfprosemibold text-[15px]">{referrals}</h2>
                        <h2 className="text-[#b0b0b0] font-sfpromedium text-[15px]">Invitar amigos</h2>
                    </div>
                    <div className="flex flex-row items-center bg-[#383838] rounded-[7px] gap-1 py-1 px-4 text-white text-[15px] font-sfpromedium">
                        <Light className={"w-[20px] h-[20px]"} />
                        <h4>{referrals*100}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalRef;