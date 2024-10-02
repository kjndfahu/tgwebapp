import Home from "./Home";
import Beneficious from "./Benficious";
import Clasificaciom from "./Clasificaciom";
import ProfilePage from "./ProfilePage";
import Navbar from "./Navbar";
import {useEffect, useState} from "react";
import {motion} from 'framer-motion'

function MainWindow({setIsScrollEnabled}) {
    const [isTab, setTab] = useState('inicio');
    const [isActive, setActive] = useState(false);
    const [isActiveListing, setActiveListing] = useState(false);
    const [isActiveToques, setActiveToques] = useState(false);
    const[isActiveModals, setActiveModals] = useState(false)
    const [isActiveDuplicate, setActiveDuplicate] = useState(false);
    const tg = window.Telegram.WebApp;
    window.Telegram.WebApp.disableVerticalSwipes()
    tg.ready();
    console.log(isActiveModals, 'modals')
    return (
        <>
            <motion.div
                key={isTab}
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.2 }}
            >
                {isTab === 'inicio' && (
                    <Home setIsScrollEnabled={setIsScrollEnabled} isActive={isActive} setActiveModals={setActiveModals} setActive={setActive} isActiveListing={isActiveListing} setActiveListing={setActiveListing} />
                )}
                {isTab === 'beneficio' && (
                    <Beneficious setIsScrollEnabled={setIsScrollEnabled} setActiveModals={setActiveModals} isActiveToques={isActiveToques} isActiveDuplicate={isActiveDuplicate} setActiveDuplicate={setActiveDuplicate} setActiveToques={setActiveToques} isActive={isActive} setActive={setActive} />
                )}
                {isTab === 'clasificaciom' && (
                    <Clasificaciom setIsScrollEnabled={setIsScrollEnabled} />
                )}
                {isTab === 'perfil' && (
                    <ProfilePage setIsScrollEnabled={setIsScrollEnabled} />
                )}
            </motion.div>

            {isActiveModals === false && (<Navbar isTab={isTab} setTab={setTab} />)}
        </>
    )
}

export default MainWindow