import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "../pages/profile/profilePage";
import GroupPage from "../pages/group/groupPage";

export const Rotas = () => {

    return (
        <Routes>
            <Route path="/" element={<h1>home</h1>}/>
            <Route path="/perfil" element={<ProfilePage/>}/>
            <Route path="/grupos" element={<GroupPage/>}/>
        </Routes>
    )
}