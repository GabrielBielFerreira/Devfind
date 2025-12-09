import { HeaderStyled } from "./headerStyled";
import logo from "../../assets/images/devfind-logo.png"
import { TiThMenuOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";



const Header = () => {
    const [menu, setMenu] = useState<string>('menuOff')

       const location = useLocation();

    const [local, setLocal] = useState<string>("Home")

        useEffect(() => {
        if (location.pathname == "/" || location.pathname == "/home"){
            setLocal("Home")
        } else if (location.pathname == "/perfil"){
            setLocal("Perfil")
        } else if (location.pathname == "/desenvolvedores"){
            setLocal("Desenvolvedores")
        } else if (location.pathname == "/vagas"){
            setLocal("Vagas")
        } else if (location.pathname == "/grupos"){
            setLocal("Grupos")
        }
    
  }, [location])

    const dropMenu = () => {
        if (menu == 'menuOn'){
            setMenu('menuOff')
        } else if (menu == 'menuOff'){
            setMenu('menuOn')
        } 
    }

    return (
        <HeaderStyled>
            <img className="devFindLogo" src={logo} alt="Logo da DevFind" />
            {/* <nav className="navDefault"> */}
            <nav className={`${menu} navDefalt`}>
                <div className="buttonContainer">
                    <Link onClick={() => setMenu('menuOff')} to={"/home"}>Home</Link>
                </div>

                <div className="buttonContainer">
                    <Link onClick={() => setMenu('menuOff')} to={"/desenvolvedores"}>Desenvolvedores</Link>
                </div>

                <div className="buttonContainer">
                    <Link onClick={() => setMenu('menuOff')} to={"/vagas"}>Vagas</Link>
                </div>

                <div className="buttonContainer">
                    <Link onClick={() => setMenu('menuOff')} to={"/grupos"}>Gropos</Link>
                </div>

                <div className="buttonContainer">
                    <Link onClick={() => setMenu('menuOff')} to={"/perfil"}>Perfil</Link>
                </div> 
            </nav>
            <div className="menu" onClick={(e) => dropMenu()}>
                <p>{local}</p>
                <TiThMenuOutline className="menuIcon" />
            </div>

        </HeaderStyled>
    )
}

export default Header