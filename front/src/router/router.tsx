import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "../pages/profile/profilePage";
import GroupPage from "../pages/group/groupPage";
import HomePage from "../pages/homePage/homePage";
import DevPage from "../pages/devs/devsPage";
import Login from "../pages/login/login";

export const Rotas = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>

            <Route path="/perfil" element={<ProfilePage/>}/>
            <Route path="/grupos" element={<GroupPage/>}/>
            <Route path="/desenvolvedores" element={<DevPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
        </Routes>
    )
}