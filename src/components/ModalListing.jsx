import coin from '../assets/listingcoin.png'
import {ListingCoin} from "./ListringCoin";

function ModalListing({isActiveListing, setActiveListing}) {
    return (
        <div className="flex absolute items-center flex-col bg-[#7c43ae] w-[100vw]">
            <div
                className="flex flex-row items-center rounded-[20px] justify-between bg-[#000000] bg-opacity-70 text-left w-[90vw]  pl-7 mt-5">
                <div>
                    <h2 className="text-white font-sfpromedium text-[32px]">Listing soon</h2>
                    <p className="text-[#b0b0b0] font-sfpromedium text-[17px] leading-[20px]">Be the first, get on
                        the<br/>waiting list </p>
                </div>
                {/*<img className="w-[250px] h-[190px]" src={coin} alt=""/>*/}
                <ListingCoin className={"w-[250px] h-[190px]"}/>
            </div>
            <div
                className="flex flex-row items-center rounded-[20px] justify-between bg-[#000000] bg-opacity-70 text-left w-[90vw] py-5 px-5 mt-5">
                <div className="flex flex-col gap-5">
                    <h2 className="text-white font-sfpromedium text-[24px] leading-[24px]">Qué es la lista de
                        criptomonedas?</h2>
                    <p className="text-[#b0b0b0] font-sfpromedium text-[17px] leading-[20px]">El término "listado"
                        proviene del mercado
                        de valores, donde significa agregar un valor a la lista de activos comercializados. En el caso
                        de las
                        criptomonedas, el listado significa agregar una moneda o token a una bolsa de intercambio. El
                        listado
                        es una etapa importante para un proyecto, ya que abre el acceso a una amplia audiencia de
                        traders e inversores.
                        Podrás vender tus tokens por dinero real.</p>
                </div>
            </div>
            <div
                className="flex flex-row items-center rounded-[20px] justify-between bg-[#000000] bg-opacity-70 text-left w-[90vw] py-5 px-5 mt-5">
                <div className="flex flex-col gap-5">
                    <h2 className="text-white font-sfpromedium text-[24px] leading-[24px]">Qué obtendrás después del listado?</h2>
                    <p className="text-[#b0b0b0] font-sfpromedium text-[17px] leading-[20px]">Más oportunidades para ganar dinero: después del listado de tu token, más personas podrán invertir en tu proyecto. Más inversores traen más dinero, lo cual es muy importante para el crecimiento y el éxito de tu proyecto.
                        Facilidad para comprar y vender: al estar en una bolsa de intercambio, será más fácil para las personas comprar y vender tus tokens.</p>
                </div>
            </div>
        </div>
    )
}

export default ModalListing;