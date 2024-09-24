import {ChevronRight, Link2, X} from "lucide-react";
import {Explosion, Light} from "./Icons";
import {motion} from 'framer-motion'

function DuplicateEnergy({setActiveDuplicate}) {
    return (
        <motion.div
            initial={{y:"100%"}}
            animate={{y:"0%"}}
            transition={{ease: 'easeInOut', }}
            className="flex absolute left-0 gap-7 z-100 bottom-0 flex-col py-3 px-5 bg-[#212121] rounded-t-[20px] w-[100vw] h-[75vh]">
            <div className="flex flex-row justify-between">
                <div className="w-[10px]"></div>
                <div className="flex flex-row bg-[#383838] p-1 rounded-full">
                    <X onClick={() => setActiveDuplicate(false)} width={18} height={18} color="#b0b0b0"/>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="bg-[#383838] w-[90px] h-[90px] rounded-[20px]"/>
                <h2 className="text-white font-sfprosemibold text-[24px]">Rio del dinero</h2>
                <p className="text-[#b0b0b0] font-sfpromedium text-[14px] leading-[15px]">Subscribete y obten una<br/>
                    recompensa por tu suscripcion</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
                <div
                    className="flex flex-row bg-[#383838] rounded-[7px] gap-1 py-1 px-4 text-white text-[15px] font-sfpromedium">
                    <Light className={"w-[20px] h-[20px]"}/>
                    <h4>0</h4>
                </div>
                <ChevronRight width={20} height={20} color="#ffffff"/>
                <div
                    className="flex flex-row bg-[#383838] rounded-[7px] gap-1 py-1 px-4 text-white text-[15px] font-sfpromedium">
                    <Light className={"w-[20px] h-[20px]"}/>
                    <h4>100</h4>
                </div>
            </div>
            <div className="flex flex-row gap-3">
                <div
                    className="flex flex-row rounded-[12px] py-3 items-center justify-center gap-2 w-[43vw] bg-[#2890FF] text-[15px] font-sfpromedium text-white">
                    <h2>Suscribirse</h2>
                </div>
                <div
                    className="flex flex-row rounded-[12px] py-3 items-center justify-center gap-2 w-[43vw] bg-[#18212A] text-[15px] font-sfpromedium text-[#2890FF]">
                    <h2>Verificaciom</h2>
                </div>
            </div>
        </motion.div>
    )
}

export default DuplicateEnergy