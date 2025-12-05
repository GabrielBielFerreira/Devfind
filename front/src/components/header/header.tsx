import { HeaderStyled } from "./headerStyled";
import logo from "../../assets/images/devfind-logo.png"


const Header = () => {
    return (
        <HeaderStyled>
            <img className="devFindLogo" src={logo} alt="Logo da DevFind" />
            <nav>
                <div className="buttonContainer">
                    <button>Home</button>
                </div>

                <div className="buttonContainer">
                    <button>Desenvolvedores</button>
                </div>

                <div className="buttonContainer">
                    <button>Vagas</button>
                </div>

                <div className="buttonContainer">
                    <button>Grupos</button>
                </div>

                <div className="buttonContainer">
                    <button>Perfil</button>
                </div>   
            </nav>
        </HeaderStyled>
    )
}

export default Header