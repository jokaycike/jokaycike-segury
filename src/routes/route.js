import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import home from "../pages/home/home";
import segunda from "../pages/segunda/segunda";
import terceira from "../pages/terceira/terceira";
import quarta from "../pages/quarta/quarta";

const AppRoutes = () => {
   return(
        <BrowserRouter>
            <Routes>
                <Route Component = { segunda }  path="/segunda" />
                <Route Component = { home }  path="/" />
                <Route Component = { terceira }  path="/terceira" />
                <Route Component = { quarta }  path="/quarta" />
            </Routes>
        </BrowserRouter>
   )
}

export default AppRoutes;