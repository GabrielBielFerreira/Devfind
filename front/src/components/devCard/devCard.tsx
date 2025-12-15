import DevCardStyled from "./devCardStyled";
import type { Usuruario } from "../../database/usuario";

const DevCard = ({id, nome, city, img, especializacao, description, skil}: Usuruario) => {

    return (
        <DevCardStyled key={id}>
            <figure>
                <img 
                src={img} 
                alt="Foto de perfil" />
            </figure>
            <p className="userName">{nome}</p>
            <span>
                <p className="userTitle">{especializacao}</p>
                <p className="city">{city}</p>
            </span>
            <p className="text">{description}</p>
            <div className="skil">
                <ul>
                    {
                        skil.map((skil) => (
                            <li><p>{skil}</p></li>
                        ))
                    }
                    {/* <li><p>HTML</p></li>
                    <li><p>React.js</p></li>
                    <li><p>CSS</p></li>
                    <li><p>Python</p></li>
                    <li><p>SQL</p></li>
                    <li><p>JAVA</p></li> */}
                 
                </ul>
            </div>
        </DevCardStyled>
    )
}

export default DevCard