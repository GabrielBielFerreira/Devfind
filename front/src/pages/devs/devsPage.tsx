import DevPageStyled from "./devsPageStyled";
import { LuUserRoundSearch } from "react-icons/lu";
import { CiBoxList } from "react-icons/ci";
import DevCard from "../../components/devCard/devCard";
import { FaCheck, FaCaretDown  } from "react-icons/fa";
import { usuarios } from "../../database/usuario";


const DevPage = () => {

    return (
        <DevPageStyled>
            <h1 className="title">Encontrar Desenvolvedores</h1>
            <div className="devContainer">
                <section className="filterSection">
                    <div className="inputContainer">
                        <LuUserRoundSearch  className="icon"/>
                        <input type="text" placeholder="Procurar..."/>
                    </div>
                    <div className="inputContainer">
                        <CiBoxList className="icon"/>
            
                        <select >
                            <option value="">Ordenar por</option>
                            <option value="nome_a-z">Nome: A - Z</option>
                            <option value="nome_z-a">Nome: Z - A</option>
                            <option value="experienciaMaior">Maior Experiencia</option>
                            <option value="experienciamenor">Menor Experiencia</option>
                        </select>
                    </div>
                    <div className="filter">
                        <span>
                            <p className="sectionTitle">Categoria</p>
                            <FaCaretDown/>
                        </span>
                        <ul>
                            <li><FaCheck/><p>HTML</p></li>
                            <li><FaCheck/><p>REACT.JS</p></li>
                            <li><FaCheck/><p>JAVA</p></li>
                            <li><FaCheck/><p>Python</p></li>
                            <li><FaCheck/><p>CSS</p></li>
                            <li><FaCheck/><p>SQL</p></li>
                            <li><FaCheck/><p>XD</p></li>
                            <li><FaCheck/><p>Product</p></li>
                        </ul>
                    </div>
                    <div className="filter">
                        <span>
                            <p className="sectionTitle">Categoria</p>
                            <FaCaretDown/>
                        </span>
                        <ul>
                            <li><FaCheck/><p>HTML</p></li>
                            <li><FaCheck/><p>REACT.JS</p></li>
                            <li><FaCheck/><p>JAVA</p></li>
                            <li><FaCheck/><p>Python</p></li>
                            <li><FaCheck/><p>CSS</p></li>
                            <li><FaCheck/><p>SQL</p></li>
                            <li><FaCheck/><p>XD</p></li>
                            <li><FaCheck/><p>Product</p></li>
                        </ul>
                    </div>
                
                </section>
                <section className="listSection">
                    <ul className="devList">
                        {
                        usuarios.map((user, index) => (
                            <li key={index}>
                                <DevCard 
                                id={user.id} nome={user.nome} city={user.city} description={user.description}
                                especializacao={user.especializacao} img={user.img} skil={user.skil}
                                />
                            </li>
                        ))
                        }
                        {/* <li> 
                            <DevCard/>
                        </li>
                        <li>
                            <DevCard/>
                        </li>
                        <li>
                            <DevCard/>
                        </li> */}
                    </ul>
                    <button>VER MAIS</button>
                </section>
            </div>
        </DevPageStyled>
    )
}

export default DevPage