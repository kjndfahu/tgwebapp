import Energia from "./Energia";
import RefsBlock from "./RefsBlock";
import MoneyCount from "./MoneyCount";
import Benefits from "./Benefits";
import {useEffect, useState} from "react";
import ModalPasivo from "./ModalPasivo";
import ModalToques from "./ModalToques";
import ModalEnergiaExtra from "./ModalEnergiaExtra";
import DuplicateEnergy from "./DuplicateEnergy";
import axios from "axios";

function Beneficious({isActive, setActive, setActiveModals, setActiveDuplicate, isActiveToques, isActiveDuplicate, setActiveToques, }){
    const tg = window.Telegram.WebApp
    tg.isVerticalSwipesEnabled = false;
    const userData = tg.initDataUnsafe?.user?.id;
    const [referrals, setReferrals] = useState(0);
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
        } catch (error) {
            console.error('Ошибка при получении информации о пользователе:', error);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);
    return(
        <div className="flex flex-col overflow-y-hidden items-center mb-24">
            <MoneyCount/>
            <div className="flex flex-col gap-2 ">
                <Energia setActiveModals={setActiveModals} setActiveDuplicate={setActiveDuplicate}/>
                <RefsBlock refferals={referrals}/>
                <Benefits setActive={setActive} refferals={referrals} setActiveToques={setActiveToques} setActiveModals={setActiveModals}/>
                {isActiveToques && <ModalToques isActiveToques={isActiveToques} setActiveToques={setActiveToques} setActiveModals={setActiveModals}/>}
                {isActive && <ModalEnergiaExtra setActive={setActive} setActiveModals={setActiveModals}/>}
                {isActiveDuplicate && <DuplicateEnergy  setActiveDuplicate={setActiveDuplicate} setActiveModals={setActiveModals}/>}
            </div>
        </div>
    )
}

export default Beneficious