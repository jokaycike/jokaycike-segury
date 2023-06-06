import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import home from "../pages/home/home";
import segunda from "../pages/segunda/segunda";
import terceira from "../pages/terceira/terceira";
import quarta from "../pages/quarta/quarta";
import intro from "../pages/intro/intro";
import materias from "../pages/materias/materias";
import mecanica from "../pages/mecanica/mecanica";
import alimenticia from "../pages/alimenticia/alimenticia";
import segurança from "../pages/segurança/segurança";

const AppRoutes = () => {
   return(
        <BrowserRouter>
            <Routes>
                <Route Component = { segunda }  path="/segunda" />
                <Route Component = { home }  path="/" />
                <Route Component = { terceira }  path="/terceira" />
                <Route Component = { quarta }  path="/quarta" />
                <Route Component = { intro }  path="/intro" />
                <Route Component = { materias }  path="/materias" />
                <Route Component = { mecanica }  path="/mecanica" />
                <Route Component = { alimenticia }  path="/alimenticia" />
                <Route Component = { segurança }  path="/segurança" />
            </Routes>
        </BrowserRouter>
   )
}

export default AppRoutes;