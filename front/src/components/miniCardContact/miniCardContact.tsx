import MiniCardContactStyled from "./miniCardStyled";
import { IoChatbubbleEllipses } from "react-icons/io5";
import type { MiniCardUser } from "../../database/usuario";


const MiniCardContact = ({id, img, especializacao, nome}: MiniCardUser) => {

    return (
        <MiniCardContactStyled key={id}>
            <figure>
                <img 
                src={img} 
                alt="Fot do perfil" />
            </figure>
            <div className="userDetail">
                <p className="userName">{nome}</p>
                <p className="text">{especializacao}</p>
            </div>
            <div className="chatButton">
                <p><IoChatbubbleEllipses /> Mensagem</p>
            </div>
        </MiniCardContactStyled>
    )
}

export default MiniCardContact