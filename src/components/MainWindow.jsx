import Home from "./Home";
import Beneficious from "./Benficious";
import Clasificaciom from "./Clasificaciom";
import ProfilePage from "./ProfilePage";
import Navbar from "./Navbar";
import {useEffect, useState} from "react";
import {motion} from 'framer-motion'

function MainWindow({isActiveModals, setActiveModals, setTab, isTab}) {
    const [isActive, setActive] = useState(false);
    const [isActiveListing, setActiveListing] = useState(false);
    const [isActiveToques, setActiveToques] = useState(false);
    const [isActiveDuplicate, setActiveDuplicate] = useState(false);
    const tg = window.Telegram.WebApp;
    window.Telegram.WebApp.disableVerticalSwipes()
    tg.ready();
    console.log(isActiveModals, 'modals')

    const [isScrollEnabled, setIsScrollEnabled] = useState(false);

    useEffect(() => {
        const preventDefault = (e) => {
            e.preventDefault();
        };

        const adjustScrollHeight = () => {
            const totalHeight = document.documentElement.scrollHeight; // Полная высота страницы
            const limitedHeight = totalHeight - 100; // Ограничиваем на 100px меньше
            document.body.style.maxHeight = `${limitedHeight}px`; // Устанавливаем максимальную высоту
            document.documentElement.style.maxHeight = `${limitedHeight}px`; // Устанавливаем для html
        };

        if (!isScrollEnabled) {
            // Отключаем скролл
            window.addEventListener('wheel', preventDefault, { passive: false });
            window.addEventListener('touchmove', preventDefault, { passive: false });
            document.body.style.overflow = 'hidden'; // Отключаем прокрутку
            adjustScrollHeight(); // Ограничиваем высоту скролла
        } else {
            // Восстанавливаем поведение скролла
            window.removeEventListener('wheel', preventDefault);
            window.removeEventListener('touchmove', preventDefault);
            document.body.style.overflow = 'visible'; // Разрешаем прокрутку
            document.body.style.maxHeight = ''; // Убираем ограничение по высоте
            document.documentElement.style.maxHeight = ''; // Убираем ограничение по высоте для html
        }

        // Очищаем слушатели при размонтировании компонента
        return () => {
            window.removeEventListener('wheel', preventDefault);
            window.removeEventListener('touchmove', preventDefault);
        };
    }, [isScrollEnabled]);
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

        </>
    )
}

export default MainWindow