import {ArrowLeftRight, ArrowUp} from "lucide-react";
import {Link} from "react-router-dom";

function ConvertationBtns() {
    return (
        <div className="flex justify-center mt-3">
            <div className="flex flex-row justify-center w-[90vw] py-1 bg-[#212121] rounded-[13px] ">
                <Link to="/listing">
                    <div
                        className="flex flex-col gap-1 w-[43vw] items-center py-3 justify-center rounded-2xl text-[#2890FF] text-[15px] font-sfpromedium active:bg-[#1F252C]">
                        <div className="flex p-1 rounded-full bg-[#2890FF]">
                            <ArrowUp width={17} height={17} color="#212121"/>
                        </div>
                        Retire
                    </div>
                </Link>
                <div
                    className="flex flex-col gap-1 w-[43vw] items-center justify-center rounded-2xl text-[#15406E] text-[15px] font-sfpromedium active:bg-[#1F252C]">
                    <div className="flex p-1 rounded-full bg-[#15406E]">
                        <ArrowLeftRight width={17} height={17} color="#212121"/>
                    </div>
                    Intercambio
                </div>
            </div>
        </div>
    )
}

export default ConvertationBtns;