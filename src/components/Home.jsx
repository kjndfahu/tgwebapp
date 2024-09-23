import Header from "./Header";
import CounterTitul from "./CounterTitul";
import ProgressBar from "./ProgressBar";
import {Suspense, useState} from "react";
import ModalEnergiaExtra from "./ModalEnergiaExtra";
import ModalListing from "./ModalListing";
import {Route} from "react-router-dom";

function Home({isActive, setActive}) {
    return (
        <Suspense fallback={ <p className="text-black text-[96px]">Loading..</p> }>
            <Header/>
            <CounterTitul/>
            <ProgressBar isActive={isActive} setActive={setActive} />
            {isActive && <ModalEnergiaExtra isActive={isActive} setActive={setActive} /> }
        </Suspense>
    )
}

export default Home;