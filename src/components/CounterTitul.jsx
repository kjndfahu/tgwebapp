import coin from '../assets/coin1.svg'
import {motion} from 'framer-motion'
import {Coin} from "./Coin";

function CounterTitul() {
    return (
        <div className="flex flex-col items-center justify-between">
            <h1 className="text-white font-sfprosemibold text-[96px]">1000</h1>
            <motion.div  whileTap={{scale: 0.9}}>
                {/*<img className="w-[70vw]" src={coin} alt="coin"/>*/}
                <Coin className={"w-[70vw] h-[40vh]"}/>
            </motion.div>
        </div>
    )
}

export default CounterTitul;