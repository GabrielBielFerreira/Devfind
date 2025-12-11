import ProfilePageStyled from "./profilePageStyled"
import ExperienceCard from "../../components/experienceCard/experienceCard"
import React from "react";

export const ProfilePage = () => {
    const [data, setData] = React.useState(null);

    const loadData = async () => {
        const url = 'http://127.0.0.1:5000/api/profile/0';
        const options = { method: 'GET' };
        try {
            const response = await fetch(url, options);
            setData(await response.json());
        } catch (error) {
            console.error(error);
            setData(null);
        }
    }

    React.useEffect(() => {
        loadData();
    }, []);

    return (
        <ProfilePageStyled>

            <section className="profileDetail">
                <h1>Perfil</h1>

                <div className="mainDetail">
                    <img src="https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg" alt="Imagem de Perfil" />
                    <section className="text">
                        <h2>{data ? data.name : 'Loading name...'}</h2>
                        <p>{data ? data.description : 'Loading description...'}</p>
                        <p className="city">{data ? data.city : 'Loading city...'}</p>
                        <button>Editar Perfil</button>
                    </section>

                </div>
                <section className="about">
                    <h3>Sobre</h3>
                    <p>{data ? data.about : 'Loading about....'}</p>
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
                            <ExperienceCard />
                        </li>
                        <li>
                            <ExperienceCard />
                        </li>
                    </ul>
                </div>

                <h2>Educação</h2>
                <div className="companies">
                    <ul>
                        <li>
                            <ExperienceCard />
                        </li>



                    </ul>
                </div>
            </section>
        </ProfilePageStyled>
    )
}