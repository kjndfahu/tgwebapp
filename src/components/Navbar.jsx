import {House, ShoppingBasket, TrendingUp, UserRound} from "lucide-react";

function Navbar({isTab, setTab}) {
    return (
        <div className="flex z-50 flex-row fixed bottom-0 items-center justify-evenly w-full py-4 bg-[#212121] text-black">
            <div onClick={() => setTab('inicio')} className="flex flex-col text-[13px] gap-1 items-center justify-center font-sfpromedium text-[#b0b0b0]">
                {isTab === 'inicio' ? (
                    <House width={20} height={20} color="#2890FF"/>
                ) : (
                    <House width={20} height={20} color="#b0b0b0"/>
                )}
                Inicio
            </div>
            <div onClick={() => setTab('beneficio')} className="flex flex-col text-[13px] gap-1 items-center justify-center font-sfpromedium text-[#b0b0b0]">
                {isTab === 'beneficio' ? (
                    <ShoppingBasket width={20} height={20} color="#2890FF"/>
                ) : (
                    <ShoppingBasket width={20} height={20} color="#b0b0b0"/>
                )}
                Beneficios
            </div>
            <div onClick={() => setTab('clasificaciom')} className="flex flex-col text-[13px] gap-1 items-center justify-center font-sfpromedium text-[#b0b0b0]">
                {isTab === 'clasificaciom' ? (
                    <TrendingUp width={20} height={20} color="#2890FF"/>
                ) : (
                    <TrendingUp width={20} height={20} color="#b0b0b0"/>
                )}
                Clasificaciom
            </div>
            <div onClick={() => setTab('perfil')} className="flex flex-col text-[13px] gap-1 items-center justify-center font-sfpromedium text-[#b0b0b0]">
                {isTab === 'perfil' ? (
                    <UserRound width={20} height={20} color="#2890FF"/>
                ) : (
                    <UserRound width={20} height={20} color="#b0b0b0"/>
                )}
                Perfil
            </div>
        </div>
    )
}

export default Navbar;