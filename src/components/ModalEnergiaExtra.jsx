import {ChevronRight, Link2, X} from "lucide-react";
import {Explosion, Light} from "./Icons";
import {motion} from 'framer-motion'

function ModalEnergiaExtra({isActive, setActive}) {
    return (
        <motion.div
            initial={{y:"100%"}}
            animate={{y:"0%"}}
            transition={{ease: 'easeInOut', }}
            className="flex absolute gap-5 left-0 z-100 bottom-0 py-3 px-5 flex-col bg-[#212121] rounded-[20px] w-[100vw] h-[70vh]">
            <div className="flex flex-row justify-between">
                <div className="w-[10px]"></div>
                <div className="flex flex-row bg-[#383838] p-1 rounded-full">
                    <X onClick={() => setActive(false)} width={30} height={30} color="#b0b0b0"/>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex items-center justify-center w-[100px] h-[100px] rounded-[20px] bg-[#383838]">
                    <Explosion className="w-[50px]"/>
                </div>
                <h2 className="text-white font-sfprosemibold text-[42px] leading-[42px]">Energia extra</h2>
                <p className="text-[#b0b0b0] font-sfpromedium text-[20px] leading-[24px]">Invita a tus amigos y gana
                    energia
                    extra.<br/>Consique energia 100 por cada amigo</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
                <div
                    className="flex flex-row bg-[#383838] rounded-[7px] gap-1 py-1 px-4 text-white text-[20px] font-sfpromedium">
                    <Light/>
                    <h4>0</h4>
                </div>
                <ChevronRight width={30} height={30} color="#ffffff"/>
                <div
                    className="flex flex-row bg-[#383838] rounded-[7px] gap-1 py-1 px-4 text-white text-[20px] font-sfpromedium">
                    <Light/>
                    <h4>100</h4>
                </div>
            </div>
            <div
                className="flex flex-row rounded-2xl py-4 items-center justify-center gap-2 w-[90vw] bg-[#2890FF] text-[25px] font-sfpromedium text-white">
                <div className="rotate-[-45deg]">
                    <Link2 width={30} height={30} color="#ffffff"/>
                </div>
                <h2>Copiar enlace</h2>
            </div>
        </motion.div>
    )
}

export default ModalEnergiaExtra