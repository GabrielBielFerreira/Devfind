import GroupCardStyled from "./groupCardStyled";
import { HiMiniUserGroup } from "react-icons/hi2";
import { PiBlueprintFill } from "react-icons/pi";
import { FaFileCode } from "react-icons/fa";
import ProjetoImage from "../../assets/images/exampleProject.jpg"



const GroupCard = () => {

    return (
        <GroupCardStyled>
            <p className="title">Grupo Teste</p>
            <div className="detail">
                <span>
                    <HiMiniUserGroup className="icon"/>
                    <p>5 Integrantes</p>
                </span>
                <span>
                    <PiBlueprintFill className="icon"/>
                    <p>Projeto: Loja</p>
                </span>
                <span>
                    <FaFileCode className="icon"/>
                    <p>React | Node.js | Python</p>
                </span>
            </div>
            <div className="buttons">
                <button>Ver Grupo</button>
                <button>Sair do Grupo</button>
            </div>
            <figure>
                <img src={ProjetoImage} alt="Exemplo de projeto" />
            </figure>
        </GroupCardStyled>
    )
}

export default GroupCard