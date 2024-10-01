import Header from "./Header";
import CounterTitul from "./CounterTitul";
import ProgressBar from "./ProgressBar";
import {Suspense, useState} from "react";
import ModalEnergiaExtra from "./ModalEnergiaExtra";
import ModalListing from "./ModalListing";
import {Route} from "react-router-dom";

function Home({isActive, setActive, setActiveModals}) {
    const [energy, setEnergy] = useState(0);
    const tg = window.Telegram.WebApp;
    tg.disableVerticalSwipes()

    return (
        <Suspense fallback={ <p className="text-black text-[96px]">Loading..</p> }>
            <div className="flex flex-col h-[90%] justify-between">
                <Header/>
                <CounterTitul energy={energy} setEnergy={setEnergy}/>
                <ProgressBar energy={energy} setEnergy={setEnergy} isActive={isActive} setActive={setActive} />
                {isActive && <ModalEnergiaExtra isActive={isActive} setActiveModals={setActiveModals} setActive={setActive} /> }
            </div>
        </Suspense>
    )
}

export default Home;