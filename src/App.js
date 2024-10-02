import './App.css';
import {useEffect, useState} from "react";
import Home from "./components/Home";
import Beneficious from "./components/Benficious";
import Clasificaciom from "./components/Clasificaciom";
import ProfilePage from "./components/ProfilePage";
import Navbar from "./components/Navbar";
import MainWindow from "./components/MainWindow";

function App() {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
    window.Telegram.WebApp.disableVerticalSwipes()

    useEffect(() => {
        // Функция для блокировки прокрутки
        const preventDefault = (e) => {
            e.preventDefault();
        };

        // Добавляем обработчики событий
        window.addEventListener('wheel', preventDefault, { passive: false });
        window.addEventListener('touchmove', preventDefault, { passive: false });
        document.body.style.overflow = 'hidden'; // Отключает прокрутку

        // Убираем обработчики при размонтировании
        return () => {
            window.removeEventListener('wheel', preventDefault);
            window.removeEventListener('touchmove', preventDefault);
            document.body.style.overflow = ''; // Включает прокрутку обратно
        };
    }, []);

    return (
        <div className="flex flex-col overflow-x-hidden overflow-y-hidden items-center text-center gap-4 ">
            <MainWindow/>
        </div>)
}

export default App;
