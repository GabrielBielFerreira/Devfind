import MiniCardGroupStyled from "./miniCardGroupStyle";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaFileCode } from "react-icons/fa";

const MiniCardGroup = () => {


    return (
        <MiniCardGroupStyled>
            <p className="title">Loja Exemplo</p>
            <div className="groupDetail">
                <p><HiMiniUserGroup/> 5 Integrantes</p>
                <p><FaFileCode/> React.js | Python | CSS</p>
            </div>
        </MiniCardGroupStyled>
    )
}

export default MiniCardGroup