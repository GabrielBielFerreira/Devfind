import HomePageStyled from "./homePageStyled";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import MiniCardGroup from "../../components/miniCardGroup/miniCardGroup";
import Post from "../../components/post/post";

const HomePage = () => {

    return (
        <HomePageStyled>
            <section className="left">
                <Link to={'/perfil'} className="perfil">
                    <figure>
                        <img src="https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg" 
                        alt="Imagem de Perfil" />
                    </figure>
                    <div className="userDetail">
                        <p className="userName">Ana Maria</p>
                        <p className="detail">Desenvolvedora Front-End</p>
                        <p className="city"><FaMapMarkerAlt className="icon"/> São Paulo</p>
                        <p className="button">Perfil</p>
                    </div>
                </Link>
                <ul className="groupList">
                    <span>
                        <Link to={'grupos'}><h3>Grupos</h3></Link>
                    </span>
                    <MiniCardGroup/>
                    <MiniCardGroup/>
                    <MiniCardGroup/>
                </ul>
            </section>
            <section className="center">
                <ul>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </ul>
            </section>
            <section className="right">

            </section>
        </HomePageStyled>
    )
}

export default HomePage