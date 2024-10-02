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

        if (!isScrollEnabled) {
            // Disable scroll when scroll is not enabled
            window.addEventListener('wheel', preventDefault, { passive: false });
            document.body.style.overflow = 'hidden'; // Disable scroll globally
        } else {
            // Enable scroll when scroll is enabled
            window.removeEventListener('wheel', preventDefault);
            document.body.style.overflow = ''; // Restore default scroll behavior
        }

        // Clean up listeners on component unmount
        return () => {
            window.removeEventListener('wheel', preventDefault);
        };
    }, [isScrollEnabled]);

    return (
        <div className="flex flex-col overflow-x-hidden overflow-y-hidden items-center text-center gap-4 ">
            <MainWindow setIsScrollEnabled={setIsScrollEnabled} />
        </div>)
}

export default App;
