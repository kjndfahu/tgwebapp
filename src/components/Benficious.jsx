import Energia from "./Energia";
import RefsBlock from "./RefsBlock";
import MoneyCount from "./MoneyCount";
import Benefits from "./Benefits";
import {useState} from "react";
import ModalPasivo from "./ModalPasivo";
import ModalToques from "./ModalToques";
import ModalEnergiaExtra from "./ModalEnergiaExtra";
import DuplicateEnergy from "./DuplicateEnergy";

function Beneficious({isActive, setActive, setActiveModals, setActiveDuplicate, isActiveToques, isActiveDuplicate, setActiveToques, }){

    return(
        <div className="flex flex-col mb-24">
            <MoneyCount/>
            <div className="flex flex-col gap-2 ">
                <Energia setActiveDuplicate={setActiveDuplicate}/>
                <RefsBlock/>
                <Benefits setActive={setActive} setActiveToques={setActiveToques} setActiveModals={setActiveModals}/>
                {isActiveToques && <ModalToques isActiveToques={isActiveToques} setActiveToques={setActiveToques} setActiveModals={setActiveModals}/>}
                {isActive && <ModalEnergiaExtra setActive={setActive} setActiveModals={setActiveModals}/>}
                {isActiveDuplicate && <DuplicateEnergy setActiveDuplicate={setActiveDuplicate} setActiveModals={setActiveModals}/>}
            </div>
        </div>
    )
}

export default Beneficious