import React from "react";
import Footer from "../componentes/footer/footer";
import Menu from "../componentes/menu/menu";

const Home = () =>{
  return (
      <div>
        <Menu />
        <React.StrictMode>
          <div>
            <h1>Página Inicial</h1>
          </div>
        </React.StrictMode>
        <Footer/>
      </div>
  );
}

export default Home;