import {ChevronRight, Link2, X} from "lucide-react";
import {Explosion, Light} from "./Icons";
import {motion} from 'framer-motion'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function ModalEnergiaExtra({isActive, setActive, setActiveModals}) {
    const [referrals, setReferrals] = useState(0);
    const [referralCode, setReferralCode] = useState('');
    const [isClicked, setIsClicked] = useState(false);
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
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 3500);
        navigator.clipboard.writeText(referralLink).then(() => {
        }).catch(err => {
            console.error('Ошибка при копировании ссылки:', err);
        });
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

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
                    setActive(false)
                    setActiveModals(false);
                }
            }}>
            <div className="flex flex-row justify-between">
                <div className="w-[10px]"></div>
                <div  onClick={handleClose} className="flex flex-row bg-[#383838] p-1 rounded-full">
                    <X  width={18} height={18} color="#b0b0b0"/>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex items-center justify-center w-[90px] h-[90px] rounded-[20px] bg-[#383838]">
                    <Explosion className="w-[40px]"/>
                </div>
                <h2 className="text-white font-sfprosemibold text-[24px] leading-[26px]">Energia extra</h2>
                <p className="text-[#b0b0b0] font-sfpromedium text-[14px] leading-[15px]">Invita a tus amigos y gana
                    energia
                    extra.<br/>Consique energia 100 por cada amigo</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
                <div
                    className="flex flex-row bg-[#383838] rounded-[7px] gap-1 py-1 px-4 text-white text-[15px] font-sfpromedium">
                    <Light className={"w-[20px] h-[20px]"}/>
                    <h4>{referrals*100}</h4>
                </div>
                <ChevronRight width={20} height={20} color="#ffffff"/>
                <div
                    className="flex flex-row bg-[#383838] rounded-[7px] gap-1 py-1 px-4 text-white text-[15px] font-sfpromedium">
                    <Light className={"w-[20px] h-[20px]"}/>
                    <h4>{referrals*100+100}</h4>
                </div>
            </div>
            <div
                onClick={copyReferralLink}
                className={`flex flex-row rounded-2xl py-4 items-center justify-center gap-2 w-[90vw] text-[18px] font-sfpromedium text-white ${isClicked ? 'bg-[#125599]' : 'bg-[#2890FF]'}`}
                style={{ transition: 'background-color 0.2s' }}>
                <div className="rotate-[-45deg]">
                    <Link2 width={20} height={20} color="#ffffff"/>
                </div>
                <h2>{isClicked ? 'Enlace copiado' : 'Copiar enlace'}</h2>
            </div>
        </motion.div>
    )
}

export default ModalEnergiaExtra