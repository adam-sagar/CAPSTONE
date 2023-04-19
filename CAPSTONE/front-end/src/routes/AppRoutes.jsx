import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import DashboardPage from "../pages/DashboardPage";
import PostsPage from "../pages/PostsPage";

function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/posts' element={<PostsPage />} />
        </Routes>
    )
}

export default AppRoutes;