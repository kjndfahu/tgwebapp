import './App.css';
import {useState} from "react";
import Home from "./components/Home";
import Beneficious from "./components/Benficious";
import Clasificaciom from "./components/Clasificaciom";
import ProfilePage from "./components/ProfilePage";
import Navbar from "./components/Navbar";

function App() {
    const [isTab, setTab] = useState('inicio');
    const [isActive, setActive] = useState(false);
    const [isActiveListing, setActiveListing] = useState(false);
    return (
        <div className="flex flex-col items-center text-center gap-4 h-[100vh]">
                {isTab === 'inicio' && (
                    <Home isActive={isActive} setActive={setActive} isActiveListing={isActiveListing} setActiveListing={setActiveListing}/>
                )}
                {isTab === 'beneficio' && (
                    <Beneficious isActive={isActive} setActive={setActive}/>
                )}
                {isTab === 'clasificaciom' && (
                    <Clasificaciom/>
                )}
                {isTab === 'perfil' && (
                    <ProfilePage/>
                )}

            <Navbar isTab={isTab} setTab={setTab} />
        </div>)
}

export default App;
