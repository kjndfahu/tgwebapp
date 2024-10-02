import Home from "./Home";
import Beneficious from "./Benficious";
import Clasificaciom from "./Clasificaciom";
import ProfilePage from "./ProfilePage";
import Navbar from "./Navbar";
import {useEffect, useState} from "react";

function MainWindow() {
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
            {isTab === 'inicio' && (
                <Home isActive={isActive} setActiveModals={setActiveModals} setActive={setActive} isActiveListing={isActiveListing} setActiveListing={setActiveListing}/>
            )}
            {isTab === 'beneficio' && (
                <Beneficious setActiveModals={setActiveModals} isActiveToques={isActiveToques} isActiveDuplicate={isActiveDuplicate} setActiveDuplicate={setActiveDuplicate} setActiveToques={setActiveToques} isActive={isActive} setActive={setActive}/>
            )}
            {isTab === 'clasificaciom' && (
                <Clasificaciom/>
            )}
            {isTab === 'perfil' && (
                <ProfilePage/>
            )}

            {isActiveModals===false && (<Navbar isTab={isTab} setTab={setTab} />) }
        </>
    )
}

export default MainWindow