import React, { useState } from "react";
import Header from "./Header";
import { useParams, Link } from "react-router-dom";


const Seguinte = () => {
    const parametros = useParams();
    console.log(parametros.cor);

    if(parametros.cor === undefined){
        parametros.cor = "green"
    }

    const [nome, alteraNome] = useState("Botão Legal");

    const handleInputChange = (event) => {
        alteraNome(event.target.value);
    };
    return (
        <div style={{textAlign: "center"}}>

            <Link to="/" className="homeButton" >{nome}</Link>
            <input 
                type="text"
                onChange={handleInputChange} 
                placeholder="Digite seu nome"
                style={{marginLeft: "3%"}}
            />
        </div>
    );   
        
  
};
export default Seguinte;