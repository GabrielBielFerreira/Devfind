import ProfilePageStyled from "./profilePageStyled"
import ExperienceCard from "../../components/experienceCard/experienceCard"

export const ProfilePage = () => {

    return (
        <ProfilePageStyled>
            
            <section className="profileDetail">
                <h1>Perfil</h1>

                <div className="mainDetail">
                    <img src="https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg" alt="Imagem de Perfil" />
                    <section className="text">
                        <h2>Ana Maria</h2>
                        <p>Desenvolvedora Front-End <span>Júnior</span></p>
                        <p className="city">São Paulo - SP</p>
                        <button>Editar Perfil</button>
                    </section>
                    
                </div>
                <section className="about">
                    <h3>Sobre</h3>
                    <p>
                        Sou desenvolvedor com experiência em criação de aplicações modernas e escaláveis, 
                        sempre focado em oferecer soluções eficientes e bem estruturadas. Tenho facilidade 
                        em trabalhar em equipe, adaptar-me a novos desafios e aprender novas tecnologias 
                        rapidamente. Nos últimos anos, atuei em projetos que envolveram interfaces responsivas, 
                        integrações com APIs e boas práticas de performance e acessibilidade.
                    </p>
                </section>
                <section className="skil">
                    <h3>Habilidades</h3>
                    <ul>
                        <li>
                            <p>CSS</p>
                        </li>
                        <li>
                            <p>HTML</p>
                        </li>
                        <li>
                            <p>JavaScript</p>
                        </li>
                        <li>
                            <p>React</p>
                        </li>
                    </ul>
                </section>

            </section>
            <section className="experience">
                <h2>Experiencias</h2>
                
                <div className="companies">
                    <ul>
                        <li>
                            <ExperienceCard/>
                        </li>
                        <li>
                            <ExperienceCard/>
                        </li>
                    </ul>
                </div>

                <h2>Educação</h2>
                <div className="companies">
                    <ul>
                        <li>
                            <ExperienceCard/>
                        </li>
                        
                        
                     
                    </ul>
                </div>
            </section>
        </ProfilePageStyled>
    )
}