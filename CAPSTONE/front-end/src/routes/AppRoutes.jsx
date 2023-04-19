import { Routes, Route } from "react-router-dom"
import CardPage from "../pages/CardPage"
import HomePage from "../pages/HomePage"
import CardList from "../components/CardList"
import CardDetails from "../components/CardDetails"

function AppRoutes() {

    return (

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<HomePage />} />
            <Route path='/signup' element={<HomePage />} />
            <Route path='/dashboard' element={<HomePage />} />
            <Route path='/viewposts' element={<HomePage />} />
        </Routes>
    )
}

export default AppRoutes