import TgUser from "./TgUser";
import Convertation from "./Convertation";
import ConvertationBtns from "./ConvertationBtns";
import LowerProfile from "./LowerProfile";

function ProfilePage() {
    return (
        <div className="bg-black w-[100vw] h-[100vh]">
            <TgUser/>
            <Convertation/>
            <ConvertationBtns/>
            <LowerProfile/>
        </div>
    )
}

export default ProfilePage;