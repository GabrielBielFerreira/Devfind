import LoginStyled from "./loginStyled";
import Logo from "../../assets/images/grandeLogo.png"
import Input from "../../components/imput/input";
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <LoginStyled>
            <section className="logo">
                <figure>
                    <img src={Logo} alt="Logo do site" />
                </figure>
            </section>
            <section className="form">
                <div className="text">
                    <h1>Bem-Vindo ao DevFind</h1>
                    <p>Encontre desenvolvedores e forme sua equipe ideal.</p>
                </div>
                <div className="inputs">
                    <Input title="Email" type="email"/>
                    <Input title="Senha" type="password"/>
                </div>
                <div className="enter">
                    <Link to={"/"} className="login"><button>ENTRAR</button></Link>
                    <span><p>Ainda não tem uma conta? <Link to={"/register"}>Registre-se</Link></p></span>
                </div>
            </section>
        </LoginStyled>
    )
}

export default Login