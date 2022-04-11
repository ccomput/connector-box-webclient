import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../paginas/Home";
import Sobre from "../paginas/Sobre";
import Conectores from "../paginas/Conectores";
import Precos from "../paginas/Precos"
import Login from "../paginas/Login";
import Cadastro from "../paginas/Cadastro";

const Routes = () => {
    return(
        <BrowserRouter>
          <Route component = { Home } path="/" exact />
          <Route component = { Sobre } path="/sobre" />
          <Route component = { Conectores } path="/conectores" />
          <Route component = { Precos } path="/precos" />
          <Route component = { Login } path="/login" />
          <Route component = { Cadastro } path="/cadastro" />
        </BrowserRouter>
    )
}

export default Routes;