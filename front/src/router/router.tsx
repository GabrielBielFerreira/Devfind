import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "../pages/profile/profilePage";
import GroupPage from "../pages/group/groupPage";
import HomePage from "../pages/homePage/homePage";

export const Rotas = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/perfil" element={<ProfilePage/>}/>
            <Route path="/grupos" element={<GroupPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
        </Routes>
    )
}