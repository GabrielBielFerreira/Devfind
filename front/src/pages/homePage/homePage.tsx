import HomePageStyled from "./homePageStyled";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import MiniCardGroup from "../../components/miniCardGroup/miniCardGroup";
import Post from "../../components/post/post";
import MiniCardContact from "../../components/miniCardContact/miniCardContact";
import { usuarios } from "../../database/usuario";
import { postList } from "../../database/post";

const HomePage = () => {

    return (
        <HomePageStyled>
            <section className="left">
                <div className="container">
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
                       <span className="sectionTitle">
                            <span>
                                <Link to={'grupos'}><h3>Grupos</h3></Link>
                            </span>
                        </span>
                        <MiniCardGroup/>
                        <MiniCardGroup/>
                        <MiniCardGroup/>
                    </ul>
                </div>
            </section>
            <section className="center">
                <ul>
                    {
                                postList.map((post) => (
                                    <Post id={post.id} userName={post.userName} userImage={post.userImage} postImage={post.postImage}
                                    data={post.data} title={post.title} text={post.text}
                                    />
                                ))
                            }
                </ul>
            </section>
            <section className="right">
              <div className="container">
                  <section className="notification">
                        <span>
                            <h3>Notificação</h3>
                        </span>
                        <ul>
                            
                        </ul>
                    </section>
                <section className="menssage">
                        <span>
                            <h3>Mensagem</h3>
                        </span>
                        <ul>
                            {
                                usuarios.map((user) => (
                                    <MiniCardContact nome={user.nome} img={user.img} especializacao={user.especializacao} id={user.id}/>
                                ))
                            }

                            {/* <MiniCardContact/>
                            <MiniCardContact/>
                            <MiniCardContact/> */}
                            {/* <MiniCardContact/> */}
                        </ul>
                </section>
              </div>
            </section>
        </HomePageStyled>
    )
}

export default HomePage