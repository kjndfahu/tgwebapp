import Header from "./Header";
import CounterTitul from "./CounterTitul";
import ProgressBar from "./ProgressBar";
import {Suspense, useEffect, useState} from "react";
import ModalEnergiaExtra from "./ModalEnergiaExtra";
import ModalListing from "./ModalListing";
import {Route} from "react-router-dom";

function Home({isActive,setIsScrollEnabled, setActive, setActiveModals}) {
    const [energy, setEnergy] = useState(0);
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsScrollEnabled(false)
    }, []);

    return (
        <Suspense fallback={ <p className="text-black text-[96px]">Loading..</p> }>
            <div className="flex flex-col gap-7 h-[85%] overflow-y-hidden justify-between ">
                <Header/>
                <CounterTitul energy={energy} setEnergy={setEnergy}/>
                <ProgressBar energy={energy}  setActiveModals={setActiveModals} setEnergy={setEnergy} isActive={isActive} setActive={setActive} />
                {isActive && <ModalEnergiaExtra isActive={isActive} setActiveModals={setActiveModals} setActive={setActive} /> }
            </div>
        </Suspense>
    )
}

export default Home;