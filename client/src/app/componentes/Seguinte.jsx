import React from "react";
import Header from "./Header";
import { useParams, Link } from "react-router-dom";


const Seguinte = () => {
    const parametros = useParams();
    console.log(parametros.cor);

    if(parametros.cor === undefined){
        parametros.cor = "green"
    }
    return (
        <div style={{textAlign: "center"}}>
            <Header headerColor= {parametros.cor} headerHeight="20vh"/>
            <Link to="/" className="homeButton" >Botão legal</Link>
        </div>
    );   
        
  
};
export default Seguinte;