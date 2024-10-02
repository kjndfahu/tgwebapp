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

    const [isScrollEnabled, setIsScrollEnabled] = useState(false);

    useEffect(() => {
        const preventDefault = (e) => {
            e.preventDefault();
        };

        // Отключаем прокрутку, если она не включена
        if (!isScrollEnabled) {
            window.addEventListener('touchmove', preventDefault, { passive: false });
            document.body.style.overflow = 'hidden'; // Отключает прокрутку
        } else {
            document.body.style.overflow = ''; // Включает прокрутку обратно
        }

        // Убираем обработчики при размонтировании
        return () => {
            window.removeEventListener('touchmove', preventDefault);
        };
    }, [isScrollEnabled]);

    return (
        <div className="flex flex-col overflow-x-hidden overflow-y-hidden items-center text-center gap-4 ">
            <MainWindow setIsScrollEnabled={setIsScrollEnabled} />
        </div>)
}

export default App;
