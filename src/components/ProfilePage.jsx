import TgUser from "./TgUser";
import Convertation from "./Convertation";
import ConvertationBtns from "./ConvertationBtns";
import LowerProfile from "./LowerProfile";

function ProfilePage() {
    const tg = window.Telegram.WebApp
    tg.isVerticalSwipesEnabled = false;
    return (
        <div className="bg-black h-[100vh]">
            <TgUser/>
            <Convertation/>
            <ConvertationBtns/>
            <LowerProfile/>
        </div>
    )
}

export default ProfilePage;