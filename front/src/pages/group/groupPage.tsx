import GroupPageStyled from "./groupPageStyled"
import { FaSearch } from "react-icons/fa";
import GroupCard from "../../components/groupCard/groupCard";

const GroupPage = () => {

    return (
        <GroupPageStyled>
            <section className="group">
                <h1>Grupos</h1>
                <div className="search">
                    <FaSearch className="searchIcon"/>
                    <input type="search" placeholder="Pesquisar grupo..." />
                </div>
                <ul className="groupList">
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                    <GroupCard/>
                </ul>
            </section>
        </GroupPageStyled>
    )
}

export default GroupPage