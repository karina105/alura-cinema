import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NoTFound from "pages/NoFound";
import PaginaBase from "pages/PaginaBase";
import Player from "pages/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />} >
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NoTFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;