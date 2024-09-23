import Energia from "./Energia";
import RefsBlock from "./RefsBlock";
import MoneyCount from "./MoneyCount";
import Benefits from "./Benefits";
import {useState} from "react";
import ModalPasivo from "./ModalPasivo";
import ModalToques from "./ModalToques";
import ModalEnergiaExtra from "./ModalEnergiaExtra";
import DuplicateEnergy from "./DuplicateEnergy";

function Beneficious({isActive, setActive}){
    const [isActivePasivos, setActivePasivos] = useState(false);
    const [isActiveToques, setActiveToques] = useState(false);
    const [isActiveDuplicate, setActiveDuplicate] = useState(false);

    return(
        <div className="flex flex-col mb-24">
            <MoneyCount/>
            <div className="flex flex-col gap-3 ">
                <Energia setActiveDuplicate={setActiveDuplicate}/>
                <RefsBlock/>
                <Benefits setActive={setActive} setActiveToques={setActiveToques} setActivePasivos={setActivePasivos}/>
                {isActivePasivos &&
                    <ModalPasivo isActivePasivos={isActivePasivos} setActivePasivos={setActivePasivos}/>}
                {isActiveToques && <ModalToques isActiveToques={isActiveToques} setActiveToques={setActiveToques}/>}
                {isActive && <ModalEnergiaExtra setActive={setActive}/>}
                {isActiveDuplicate && <DuplicateEnergy setActiveDuplicate={setActiveDuplicate}/>}
                <div className="w-[90vw] h-[100px]"></div>
            </div>
        </div>
    )
}

export default Beneficious